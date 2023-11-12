import { Component, Input } from '@angular/core';
import { Config } from '../config';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { DEFAULT_CONFIG} from '../default_config'
import { Part } from '../part';
import { Grid } from '../grid';
import { GridComponent } from '../grid/grid.component';
import { NONE_TYPE } from '@angular/compiler';

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
    //config: this.config
  }
}
