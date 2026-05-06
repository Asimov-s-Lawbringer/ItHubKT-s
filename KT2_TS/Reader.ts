import { Publisher } from './Publisher';
import { Reception } from './Interfaces';

export class Reader {
    private firstName: string;
    private lastName: string;
    private items: Publisher[] = []
    /*
    Поменять Имя/Фамилию?Ну или ник/Юзернейм.
        setFN(firstName: string): void {
        this.firstName = firstName;
        }
        get getFN() {return this.firstName;}
    
        setLN(lastName: string): void {
        this.lastName = lastName;
        }
        get getLN() {return this.lastName;}
    */
    //Решил отказаться от сеттера и сделать метод управления
    addItem(item: Publisher): void {
        this.items.push(item)
    }

    removeItem(item: Publisher): boolean {
        const index = this.items.indexOf(item)

        if (index === -1) {
            console.log("Такой книги нету")
            return false;
        }

        this.items.splice(index, 1)
        return true;
    }
    getItems(): readonly Publisher[] { //делаем чтение ТОЛЬКО чтением
        return this.items;
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}