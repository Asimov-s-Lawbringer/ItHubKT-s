import { UserName } from "./types.js";
import { Role } from "./types.js";
import { Password } from "./types.js";
import { Login } from "./types.js";
import { Message } from "./types.js";

export abstract class User {

    constructor(
        protected userName: UserName,//Заменить на типы? P.s сделано
        protected userSurname: UserName,//Не забудь- сделай их приватными когда будешь реализовывать в наследниках
        protected userRole: Role,
        private userLogin: Login,
        private userPassword: Password
    ) {}

    //Геттеры
    public getUserName(): UserName { 
        return this.userName
    }

    public getSurname(): UserName {
        return this.userSurname
    }

    public getUserRole(): Role {
        return this.userRole
    }

    //в идеале было бы вообще вынести проверку доступа в отдельный сервис типа AccessControl.accessToLogin(admin,student) эхх..

    public getPasswordFor(target: User): Password {
        if (this.getUserRole() !== Role.Admin) {
            throw new Error("Вы не Администратор и не можете запрашивать пароли");
        }
        
        return target.userPassword; 
    }

    public getLoginFor(target: User): Login {
        if (this.getUserRole() !== Role.Admin) {
            throw new Error("Вы не Администратор и не можете запрашивать логины");
        }
        
        return target.userLogin; 
    }

    abstract getInfo(): Message;
}