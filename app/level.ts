import { Part } from './part';

export interface Level {
    level: number;
    width: number;
    height: number;
    available_parts: Part[];
}