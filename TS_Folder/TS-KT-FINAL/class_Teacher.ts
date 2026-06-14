import { User } from "./abstract_class_User.js";
import { UserName } from "./types.js";
import { Role } from "./types.js";
import { Password } from "./types.js";
import { Login } from "./types.js";
import { Message } from "./types.js";

export class Teacher extends User {

    constructor(
        userName: UserName,
        userSurname: UserName,
        userLogin: Login,
        userPassword: Password
    ) {
        super(userName, userSurname, Role.Admin, userLogin, userPassword)
    }

    getInfo(): Message {
        return "Данные учеников: ..."
    }
}