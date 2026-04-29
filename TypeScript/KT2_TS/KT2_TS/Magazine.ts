import { Publisher } from './Publisher';
import { Reception } from './Interfaces';

export class Magazine extends Publisher implements Reception{
    issue: number;
    static counterOfMagazines:number = 0;
    static copies:number;

    constructor(title: string, author: string, pubYear: string, copies: number, issue: number) {
        super(title,author,pubYear,copies)
        this.issue = issue;
        Magazine.counterOfMagazines++ //Реализую подсчет количества изданий Магазинов..то есть Журналов
    }

    delivery(x:number){
        if (this.getCopies >= x){
            
        }
        else {
            
        }
    };
    receive(y:number){
        
    };
}