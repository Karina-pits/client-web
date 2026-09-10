interface Course {
  name: string;
  durationHours: number;
  students: string[];
}


class OnlineCourse implements Course {
  public name: string;
  public durationHours: number;
  public students: string[] = [];

  constructor(name: string, durationHours: number) {
    this.name = name;
    this.durationHours = durationHours;
  }

 
  public registerStudent(student: string): void {
    if (this.isStudentRegistered(student)) {
      console.log(`Студент ${student} вже зареєстрований на курс "${this.name}".`);
    } else {
      this.students.push(student);
      console.log(`Студента ${student} успішно додано до курсу "${this.name}".`);
    }
  }

  public isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  public addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Курс "${course.name}" успішно додано.`);
  }

  public removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
    console.log(`Курс "${courseName}" видалено.`);
  }

  public findCourse(courseName: string): Course | undefined {
    return this.courses.find((course) => course.name === courseName);
  }

  public printAllCourses(): void {
    console.log(" Список усіх курсів та зареєстрованих студентів ");
    this.courses.forEach((course) => {
      const studentList =
        course.students.length > 0 ? course.students.join(", ") : "немає студентів";
      console.log(
        `Курс: ${course.name} (${course.durationHours} год.) | Студенти: [${studentList}]`
      );
    });
  }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 40);
const jsCourse = new OnlineCourse("JavaScript Advanced", 60);
const reactCourse = new OnlineCourse("React & Redux", 50);

manager.addCourse(tsCourse);
manager.addCourse(jsCourse);
manager.addCourse(reactCourse);

console.log("\n Реєстрація студентів");

tsCourse.registerStudent("Каріна");
tsCourse.registerStudent("Олександр");
jsCourse.registerStudent("Марія");
jsCourse.registerStudent("Іван");

tsCourse.registerStudent("Каріна");

manager.printAllCourses();

console.log("\nПошук та видалення");
const found = manager.findCourse("TypeScript Basics");
if (found) {
  console.log(`Знайдено курс: ${found.name}, тривалість: ${found.durationHours} год.`);
}

manager.removeCourse("React & Redux");

manager.printAllCourses();