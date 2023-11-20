import { Component, Input } from '@angular/core';
import { Config } from '../config';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { DEFAULT_CONFIG} from '../default_config'
import { Part } from '../part';
import { Grid } from '../grid';
import { GridComponent } from '../grid/grid.component';
import { NONE_TYPE } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent {

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
  ) {}

  level: number = 1;
  config: Config = DEFAULT_CONFIG;
  grid: Grid = {
    width: 0, 
    height: 0, 
    slots: [],
  }

  ngOnInit(): void {

    // Subscribe to changes in the query params
    this.route.queryParams.subscribe(
      (params) => {

        // Pull out the level number
        this.level = Number(params['level'])

        // Download the relevant config
        this.getConfig(this.level);
      }
    );

  }

  getConfig(level_int: number): void{
    if (Number.isNaN(level_int)){
      level_int =1;
    }
    // Download a config via the config service
    this.configService.getConfig(level_int).subscribe(
      config => {
        console.log('PLAY COMPONENT HAS CONFIG FOR LEVEL', level_int);
        // Update the config
        this.config = config;
      }
    )
  }

}
