import { Part } from './part';
import { Coordinate } from './coordinate';
import { EnforcedPart } from './enforced_part';

export interface Config{
    available_parts: Part[];
    enforced_parts: EnforcedPart[];
    hazards: Coordinate[];
    grid_width: number;
    grid_height: number;
    rules: string;
}