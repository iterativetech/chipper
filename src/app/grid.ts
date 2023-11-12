import { Slot } from './slot';
import { Config } from './config';

export interface Grid {
    width: number;
    height: number;
    slots: Slot[][];
    //config: Config;
}