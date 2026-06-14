import { User } from "./abstract_class_User.js";
import { Role } from "./types.js";

export class Homework {
    constructor(creator: User,private title:string,private trivia: string,private score: number){
    if (creator.getUserRole() !== Role.Teacher){
        throw new Error(
            "ДЗ делает учитель"
        )
    }
    }

    getTitle(): string {
    return this.title;
    }

    getInfo(): string {
    return this.trivia;
    }

    getMaxScore(): number {
    return this.score;
    } 

}