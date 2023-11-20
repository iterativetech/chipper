import { Component, Input, Inject } from '@angular/core';
import { Slot } from '../slot';
import { Part } from '../part';
import { Grid } from '../grid';
import { DEFAULT_CONFIG } from '../default_config';
import { Config } from '../config';
import { Coordinate } from '../coordinate';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serverResponse } from '../serverResponse';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule, NgFor } from '@angular/common';
import {NgIf} from '@angular/common';
import { OnChanges } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  
  @Input() passthrough_config : Config = DEFAULT_CONFIG

  constructor(
    /*private configService: ConfigService,
    private route: ActivatedRoute,*/
    private http: HttpClient,
    public dialog: MatDialog,
    ) {}


  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Cleared');
  }

  available_parts: Part[] = [];
  grid_width: number = 0;
  grid_height: number = 0;
  slots: Slot[][] = [[]];
  hazards: Coordinate[] = [];
  solution: string = "";
  level: number = 1; 
  empty_grid: Grid = {
    width: 0, 
    height: 0, 
    slots: []
  }
  grid: Grid = this.empty_grid;
  
  htmlContent: string = '<p>Here is your content</p>';
  rules: string = "";

  // On init, get the level
  ngOnInit(): void {
  }

  config: Config = DEFAULT_CONFIG;

  ngOnChanges(changes: any){

    if ('passthrough_config' in changes){
      this.config = changes.passthrough_config.currentValue;
      this.updateConfig(changes.passthrough_config.currentValue)
    }
    
  }

  updateConfig(config: Config){
    this.grid = this.empty_grid;
    this.available_parts = config.available_parts;
    this.grid_height = config.grid_height;
    this.grid_width = config.grid_width;

    // Fill with empty parts
    for (let i = 0; i < this.grid_height; i++){
        for (let j = 0; j < this.grid_width; j++){
            this.slots[i].push({x: j, y: i, part: this.empty_part})
        }
        this.slots.push([]);
    }

    // Populate hazards
    config.hazards.forEach(hazard => {
      console.log('HAZARD AT', hazard);
      this.slots[hazard.y][hazard.x].part = this.hazard_part;
    });

    // Populate enforced parts
    config.enforced_parts.forEach(enforced_part => {
      console.log(enforced_part);
      this.slots[enforced_part.coordinate.x][enforced_part.coordinate.y].part = enforced_part.part
    })

    // Populate the rules
    this.rules = config.rules;

    this.grid = {
      width: this.grid_width, 
      height: this.grid_height, 
      slots: this.slots
    }
  }
  
  onClick(test: any, slot: Slot) {
    slot.part = test;
    console.log(this.generateSolution());
  }

  generateSolution(): string {
    this.solution = "";
    this.slots.forEach(row => {
        row.forEach(column => {
            this.solution += column.part.char;
        });
    });
    return this.solution
  }

  checkSolution(): void{
    this.submitSolution().subscribe(
      response => {
        this.openDialog(response);
      }
    )
  }

  submitSolution(): Observable<serverResponse>{
    this.generateSolution();
    console.log('Submitting solution', this.solution);
    return this.http.get<serverResponse>('http://localhost:8000/solve?level='+this.level+'&solution='+this.solution)
  }

  openDialog(response: serverResponse): void{
    //console.log(response);
    this.dialog.open(DialogDataExampleDialog, {data: response})
  }

  empty_part: Part = {name: "NONAME", restrictions: '', effects: '', description: "NODESCRIPTION", char: "!", icon: "check_box_outline_blank", limit: 0, stats: {}, disabled: false, conductive: false};
  hazard_part: Part = {name: "HAZARD", restrictions: '', effects: '', description: "HAZARD", char: "*", icon: "dangerous", limit: 0, stats: {}, disabled: true, conductive: false};

}

@Component({
  selector: 'test-dialog',
  templateUrl: 'test-dialog.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, NgFor, RouterLink]

})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: serverResponse) {}
}