import { SubMisStatus } from "./types.js";
import { User } from "./abstract_class_User.js";
import { Role } from "./types.js";
import { Student } from "./class_Student.js";
import { Scores } from "./types.js";
import { Homework } from "./class_Homework.js";


export class Submission{
    constructor(private student: Student,
        private homework: Homework,
        private answer: string
    ){}

    private status: SubMisStatus = SubMisStatus.Pending;

    private score = 0;

    changeStatus(requester: User,requested_status: SubMisStatus){
        if (requester.getUserRole() === Role.Teacher){
            if(requested_status === SubMisStatus.Accepted){
                this.status = SubMisStatus.Accepted
            }
            else {
                this.status = SubMisStatus.Rejected
            }
        }
    }

    changeScore(requester: User,requested_score: Scores){
        if (requester.getUserRole() === Role.Teacher){
            if(requested_score === Scores.Max){
                this.score = 10
            }
            else if(requested_score === Scores.Mid){
                this.score = 5
            }
            else{
                this.score = 0
            }
        }
        else{
            throw new Error("У вас нет таких прав...")
        }
    }

    public getScore(): number {
        return this.score
    }

    public getStatus(): SubMisStatus {
        return this.status
    }

    public getStudent(): Student{
        return this.student
    }

    public getHomework(): Homework {
        return this.homework
    }

    public getAnswer(): string{
        return this.answer
    }

}