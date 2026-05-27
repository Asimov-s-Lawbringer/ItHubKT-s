import { Logger } from "./types.js";

export class LogToConsole{
    prt(Log:string):void{
        console.log(Log)
    //  Вот тут можем расширить класс в любое направление,например - слать наши логи на сервис логирования...
    }
}