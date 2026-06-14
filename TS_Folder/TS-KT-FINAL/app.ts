import { Admin } from "./class_Admin.js";
import { Course } from "./class_Course.js";
import { Homework } from "./class_Homework.js";
import { Lesson } from "./class_Lesson.js";
import { Student } from "./class_Student.js";
import { Submission } from "./class_Submission.js";
import { Teacher } from "./class_Teacher.js";
import { Scores, SubMisStatus } from "./types.js";

//Допустим это наша Online School

//Участники
const teacher = new Teacher("Alexander","Llewellyn","llewwy@pochta.com","1993llewy")
const student = new Student("Alexander","Anderson","alexcuite2@pochta.ru","2001alexy")
const admin = new Admin("Marshall","Urievich","marshallmail@pochta.com","1980marshall")

//Образовательная часть
const course = new Course("Введение в TypeScript")
const lesson = new Lesson("Первые шаги в ТайпСкрипт- Установка NODEjs","1)Включите компьютер 2)Откройте холодильник...")
const homework = new Homework(teacher,"Установите NODEjs,хотя бы дома..","Чтобы установить нужно лишь...",5) //тут 5 это макс балл как на лкспи 

//Заполняем..
course.addLessons(teacher,lesson)
course.addHomework(teacher,homework)

//Студент посылает проверку
const submission = new Submission(student,homework,"Установил NODEjs.. нуу..почти!")

//Учитель проверяет
submission.changeScore(teacher,Scores.Mid) //"почти"?Серьезно? Ну тут не больше Среднего балла точно..
submission.changeStatus(teacher,SubMisStatus.Accepted)

//Смотрим на успехи нашего подопечного
console.log(course.calculateStudentRating(student))

//Админские дела
console.log(student.getPasswordFor(admin))
console.log(student.getLoginFor(admin))

