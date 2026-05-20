import { Publisher } from './Publisher';
import { Reception } from './Interfaces';
import { Reader } from './Reader';

export class Book extends Publisher implements Reception {
    pages: number;
    static counterOfBooks: number = 0;

    constructor(title: string, author: string, pubYear: string, copies: number, pages: number) {
        super(title, author, pubYear, copies)
        this.pages = pages;
        Book.counterOfBooks++ //Реализую подсчет количества изданий Книг
    }

    delivery(reader: Reader): void {
        if (this.getCopies <= 0) {
            console.log("Нет книжек")
            return;
        }

        if (reader.getItems().length >= 3) {
            console.log("Много хочеш")
            return;
        }

        this.popCopies()//отбираем у себя 
        reader.addItem(this) //просто даем книгу в метод пусть сам там разбирается 
    }

    receive(reader: Reader): void {
        const transaction = reader.removeItem(this)//тоже самое просто ремуваем "эту" книгу а он уж пусть сам разбирается внутри
        if (transaction == true) {
            this.addCopies()//себе прибавляем если проверка прошла
        }

        return; //если нет,то на нет - и суда нет
    }
}