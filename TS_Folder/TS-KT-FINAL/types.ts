export type UserName = string;
export enum Role {
    Student = "Student",
    Teacher = "Teacher",
    Admin = "Admin"
}
export type Password = string; //открыто для расширения (конкретизации,например >8 символов и т.д,наверное...)
export type Login = string;
export type Message = string;
export enum SubMisStatus {
    Pending,
    Accepted,
    Rejected
}
export enum Scores {
    Max,
    Mid,
    Min
}