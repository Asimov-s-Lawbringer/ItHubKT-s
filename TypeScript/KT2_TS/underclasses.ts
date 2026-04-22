import { Publisher } from './Publisher';
import { Reception } from './interfaces';

export class Book extends Publisher implements Reception{
    pages: number;
    static counterOfBooks:number = 0;
    static copies:number;
    
    constructor(title: string, author: string, pubYear: string, copies: number, pages: number) {
        super()
        this.pages = pages;
        this.title = title;
        this.setAuthor(author);
        this.setPubYear(pubYear);
        this.setCopies(copies)
        Book.counterOfBooks++ //Реализую подсчет количества изданий Книг
    }
    
    delivery(x:number): string{
        if (this.getCopies >= x){
            return "+ X книг"
        }
        else {
            return "Много хочеш >:("
        }
    };
    receive(y:number): string{
        return "+ Y книг обратно в Copies"
    };
}

export class Magazine extends Publisher implements Reception{
    issue: number;
    static counterOfMagazines:number = 0;
    static copies:number;

    constructor(title: string, author: string, pubYear: string, copies: number, issue: number) {
        super()
        this.issue = issue;
        this.setName(title)
        this.setAuthor(author);
        this.setPubYear(pubYear);
        this.setCopies(copies)
        Magazine.counterOfMagazines++ //Реализую подсчет количества изданий Магазинов..то есть Журналов
    }

    delivery(x:number): string{
        if (this.getCopies >= x){
            return "+ X журналов"
        }
        else {
            return "Много хочеш >:("
        }
    };
    receive(y:number): string{
        return "+ Y журналов обратно в Copies"
    };
}

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

    constructor(firstName:string,lastName:string,items:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.items = items;
    }
}