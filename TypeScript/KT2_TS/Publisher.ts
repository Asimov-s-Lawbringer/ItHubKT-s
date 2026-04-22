export abstract class Publisher{
    protected abstract title:string;
    protected abstract author:string;
    protected abstract pubYear:string;
    protected abstract copies: number;

    constructor(title: string) {
        this.title = title;
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

    setCopies(copies: number): void {
	this.copies = copies;
    }
    get getCopies() {return this.copies;}

}

