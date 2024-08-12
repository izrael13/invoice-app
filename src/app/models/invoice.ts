import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./Item";

export class Invoice {
    id!:number;
    name!:string;
    client!:Client;
    company!:Company;
    items!:Item[];
    total!:number;
}