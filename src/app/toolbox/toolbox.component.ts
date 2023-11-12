import { Component } from '@angular/core';
import { Part } from '../part';
import { Slot } from '../slot';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent {
  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    ) {}

// On init, get the 
  ngOnInit(): void {
    this.getConfig(Number(this.route.snapshot.queryParamMap.get('level')));
  }

  available_parts: Part[] = [];
  
  getConfig(level_int: number): void{

    this.configService.getConfig(level_int).subscribe(
      config => {
        console.log('TOOLBOX HAS CONFIG FOR LEVEL', level_int);
        this.available_parts = config.available_parts;
      }
    )
  }
}
