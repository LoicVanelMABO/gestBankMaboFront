import { Client } from "./clients";
import { Operations } from "./operations";

export interface Compte{
    id:number;
    balance: number;
    createdAt:Date;
    client:Client;
    tauxInteret:number;
    decouvert:number;
    devis:string;
    numCompte:string;
    status:any;
    operations?:Array<Operations>;
}