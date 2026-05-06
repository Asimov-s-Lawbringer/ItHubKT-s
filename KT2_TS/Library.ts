import { Publisher } from './Publisher';

/*
//Идея на будущее в проверке выдачи (что если изданий и их типов 100+?)
protected canDeliver(reader: Reader): boolean {
    if (this.getCopies <= 0) return false
    if (reader.getItems().length >= 3) return false
    return true
}
if (!this.canDeliver(reader)) {
    console.log("Низя выдать!")
    return
}
*/

export class Library {
    private items: Publisher[] = []

    list() {
        return this.items
    }

    addItem(item: Publisher): void {
        this.items.push(item)
    }

    dropItem(item: Publisher){
    const index = this.items.indexOf(item)

        if (index === -1) {
            console.log("Такой книги нету")
            return false;
        }

        this.items.splice(index, 1)
        return true;
    }
}

