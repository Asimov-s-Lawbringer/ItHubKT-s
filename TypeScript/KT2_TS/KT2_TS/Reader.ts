import { Publisher } from './Publisher';
import { Reception } from './Interfaces';

export class Reader {
    private firstName:string;
    private lastName:string;
    private items:number;

    setFN(firstName: string): void {
	this.firstName = firstName;
    }
    get getFN() {return this.firstName;}

    setLN(lastName: string): void {
	this.lastName = lastName;
    }
    get getLN() {return this.lastName;}

    setItems(items: number): void {
	this.items = items;
    }
    get getItems() {return this.items;}

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.items = 0;
    }
}