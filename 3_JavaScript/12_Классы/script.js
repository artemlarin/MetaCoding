class Student
{
    constructor(name, age, course)
    {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    showInfo()
    {
        console.log(`Cтудет ${this.name}, возраст: ${this.age} курс: ${this.course}`);
    }

    increaseAge(age)
    {
        this.age++;
        console.log(`Студет ${this.name}, возраст: ${this.age}`);
    }
}

let student = new Student("Иван", 20, 3);
let student2 = new Student("Анна", 22, 4);

student.showInfo();
student2.showInfo();

console.log("Студенты стали старше:");
student.increaseAge();
student2.increaseAge();