export abstract class Publisher{
    private title:string;
    private author:string;
    private pubYear:string;
    private copies: number;

    constructor(title:string,author:string,pubYear:string,copies: number){
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.copies = copies;
    }

    setName(title: string): void {
	this.title = title;
    }
    get getTitle() {return this.title;}

    setAuthor(author: string): void {
	this.author = author;
    }
    get getAuthor() {return this.author;}

    setPubYear(pubYear: string): void {
	this.pubYear = pubYear;
    }
    get getPubYear() {return this.pubYear;}

    addCopies():void {
        this.copies++
    }

    popCopies():void {
        if(this.copies > 0){
            this.copies--
        }
    }
    get getCopies() {return this.copies;}

}

