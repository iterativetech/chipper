import { Config } from "./config";

export const DEFAULT_CONFIG: Config = {
    available_parts: [
      {name: 'B_NAME', restrictions: '', effects: '', description: 'B_DESCRIPTION', 'char': 'B', limit: 2, stats: {'test': 1}, icon: "battery_alert", disabled: false},
    ],
    enforced_parts: [
        {
            coordinate: {x: 0, y:0},
            part: {name: 'C_NAME', restrictions: '', effects: '', description: 'C_DESCRIPTION', 'char': 'C', limit: 2, stats: {'test': 1}, icon: "cable", disabled: false}        }
    ],
    grid_height: 3,
    grid_width: 3,
    hazards: [{x: 1, y: 1}],
    rules: 'There are no rules!'
  }