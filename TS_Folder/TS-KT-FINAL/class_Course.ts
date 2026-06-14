import { User } from "./abstract_class_User.js";
import { Homework } from "./class_Homework.js";
import { Lesson } from "./class_Lesson.js";
import { Student } from "./class_Student.js";
import { Submission } from "./class_Submission.js";
import { Role, SubMisStatus } from "./types.js";

export class Course {

    private submissions: Submission[] = []

    private lessons: Lesson[] = [];

    private students: Student[] = [];

    private homeworks: Homework[] = [];

    constructor(private title:string){

    }

    addHomework(teacher: User, hw: Homework){
        if (teacher.getUserRole() === Role.Teacher){
            this.homeworks.push(hw)
            return;
        } 
        throw new Error("У вас нет прав!")
    }

    addLessons(teacher: User, ls: Lesson){
        if (teacher.getUserRole() === Role.Teacher){
            this.lessons.push(ls)
            return;
        } 
        throw new Error("У вас нет прав!")
    }

    addStudents(teacher: User, pupil: Student){
        if (teacher.getUserRole() === Role.Teacher){
            this.students.push(pupil)
            return;
        } 
        throw new Error("У вас нет прав!")
    }
    public getCourseName(): string {
        return this.title
    }

    public getLessons(): Lesson[] {
    return this.lessons;
    }

    public getStudents(): Student[] {
    return this.students;
    }
    public getHomeworks(): Homework[] {
    return this.homeworks;
    }

    removeLessons(teacher: User, deleted_ls:Lesson){
        if (teacher.getUserRole() === Role.Teacher){
            this.lessons = this.lessons.filter(currUrok => currUrok !== deleted_ls)
            return;
        } 
        throw new Error("У вас нет прав!")
    }

    removeStudents(teacher: User, deleted_pupil: Student){
        if (teacher.getUserRole() === Role.Teacher){
            this.students = this.students.filter(currPupil => currPupil !== deleted_pupil)
            return;
        } 
        throw new Error("У вас нет прав!")
    }

    removeHomeworks(teacher: User, deleted_hw: Homework){
        if (teacher.getUserRole() === Role.Teacher){
            this.homeworks = this.homeworks.filter(currHW => currHW !== deleted_hw)
            return;
        } 
        throw new Error("У вас нет прав!")
    }

    addSubmission(submission: Submission){
        this.submissions.push(submission)
    }

    calculateStudentRating(student: Student): number {

    let total = 0;

    for (const sub of this.submissions) {

        if (sub.getStudent() === student) {
            total += sub.getScore();
        }
    }

    return total;
    }

}
