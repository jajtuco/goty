export interface Game {
    id   : string;
    name : string;
    url  : string;
    votos: number;
}

export interface Voto {
    name   : string;
    value : number;
}