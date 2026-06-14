export class Lesson {
    constructor(private title: string,private content:string){

    }

    getTitle(): string {
    return this.title;
    }

    getContent(): string {
    return this.content;
    }

}