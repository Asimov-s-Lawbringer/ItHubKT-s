import { Publisher } from './Publisher';
import { Reception } from './Interfaces';
import { Reader } from './Reader';

export class Magazine extends Publisher implements Reception {
    issue: number;
    static counterOfMagazines: number = 0;

    constructor(title: string, author: string, pubYear: string, copies: number, issue: number) {
        super(title, author, pubYear, copies)
        this.issue = issue;
        Magazine.counterOfMagazines++ //Реализую подсчет количества изданий Магазинов..то есть Журналов
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

        this.popCopies()
        reader.addItem(this) //просто даем журнальчик в метод пусть сам там разбирается 
    }

    receive(reader: Reader): void {
        const transaction = reader.removeItem(this)//тоже самое просто ремуваем "этот" журнальчик а он уж пусть сам разбирается внутри
        if (transaction == true) {
            this.addCopies()//себе прибавляем если проверка прошла
        }

        return; //если нет,то нет..
    }
}