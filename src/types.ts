export interface Poll {
    question: string;
    answers: Option[]
}

export interface Option {
    value: string;
    count: number;   
}