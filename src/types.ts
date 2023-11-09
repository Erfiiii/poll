export interface Poll {
    question: string;
    answers: Option[]
}

export interface Option {
    value: string;
    count: number;   
}

export interface Config {
    question: string;
    options: string[]
}

export interface ClientContextType {
    load: (config: Config) => Promise<Poll>;
    addAnswer: (option: Option, config: Config) => Promise<void>;
  }