import { Publisher } from './Publisher';
import { Reception } from './Interfaces';

export class Book extends Publisher implements Reception{
    pages: number;
    static counterOfBooks:number = 0;
    static copies:number;
    
    constructor(title: string, author: string, pubYear: string, copies: number, pages: number) {
        super(title,author,pubYear,copies)
        this.pages = pages;
        Book.counterOfBooks++ //Реализую подсчет количества изданий Книг
    }
    
    delivery(x:number){
        if (this.getCopies >= x){
            this.setCopies(x)
        }
        else {
            this.setCopies(0)
            console.log("То,сколько книг вы хотите взять больше,чем есть впринцыпе ")
        }
    };
    receive(y:number){
        
    };
}