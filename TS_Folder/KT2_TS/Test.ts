import { Book } from "./Book"
import { Magazine } from "./Magazine"
import { Reader } from "./Reader"
import { Library } from "./Library"

const reader1 = new Reader("Ivan", "Petrov")

const book1 = new Book("The demons", "Dostoevsky", "1871-1872", 20, 602)
const mag1 = new Magazine("Time", "Editor", "2026", 30, 68)
const library = new Library()

book1.delivery(reader1)
book1.delivery(reader1)

mag1.delivery(reader1)

console.log(reader1.getItems())
console.log(book1.getCopies)
console.log(mag1.getCopies)

library.addItem(book1)
library.addItem(mag1)
console.log(library.list())