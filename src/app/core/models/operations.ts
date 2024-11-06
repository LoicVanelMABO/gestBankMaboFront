import { Compte } from "./comptes";

export interface Operations{
    compte:Compte;
    id:number;
    amount:number;
    dateOperation:Date;
    typeOperation:any;
    numOperation:string;
}