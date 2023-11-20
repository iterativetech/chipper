export interface Part {
    name: string;
    description: string;
    char: string;
    icon: string;
    limit: number;
    stats: object;
    disabled: boolean;
    restrictions: string;
    effects: string;
    conductive: boolean;
}