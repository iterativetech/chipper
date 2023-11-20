import { Part } from '../part';
import { Component, Input, Inject } from '@angular/core';
import { DEFAULT_CONFIG } from '../default_config';
import { Config } from '../config';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent {
  constructor(
    ) {}

  @Input() passthrough_config : Config = DEFAULT_CONFIG
  
  config: Config = DEFAULT_CONFIG;
  available_parts: Part[] = [];

  ngOnChanges(changes: any){
    if ('passthrough_config' in changes){
      this.config = changes.passthrough_config.currentValue;
      this.available_parts = this.config.available_parts;
    }
  }

  ngOnInit(): void {
  }
  
}
