class Person {
  #cpf;
  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.#cpf = cpf;
  }

  get CPF() {
    return "*".repeat(this.#cpf.length);
  }

  set CPF(newCPF) {
    if (newCPF.length < 6) {
      console.log("INVALID! It needs to have 6 characters.");
    } else {
      this.#cpf = newCPF;
      console.log("CPF has been UPDATED!");
    }
  }

  viewPersonData() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`CPF: ${this.CPF}`);
  }
}

class Student extends Person {
  constructor(name, age, cpf, grade) {
    super(name, age, cpf);
    this.grade = grade;
  }

  viewPersonData() {
    super.viewPersonData();
    console.log(`Grade: ${this.grade}`);
  }
}

class Teacher extends Person {
  constructor(name, age, cpf, subject) {
    super(name, age, cpf);
    this.subject = subject;
  }

  viewPersonData() {
    super.viewPersonData();
    console.log(`Subject: ${this.subject}`);
  }
}

class School {
  constructor() {
    this.studentList = [];
    this.teacherList = [];
  }

  addTeacher(newTeacher) {
    this.teacherList.push(newTeacher);
    console.log(`Teacher: ${newTeacher.name} has been added to the system.`);
  }

  removeTeacher(teacherName) {
    let newList = [];
    for (let index = 0; index < this.teacherList.length; index++) {
      if (this.teacherList[index] !== teacherName) {
        newList.push(this.teacherList[index]);
      }
    }
    this.teacherList = newList;
    console.log(`Teacher ${teacherName.name} has been REMOVED from the system.`);
  }

  addStudent(newStudent) {
    this.studentList.push(newStudent);
    console.log(`Student: ${newStudent.name} has been added to the system.`);
  }

  removeStudent(studentName) {
    let newList = [];
    for (let index = 0; index < this.studentList.length; index++) {
      if (this.studentList[index] !== studentName) {
        newList.push(this.studentList[index]);
      }
    }
    this.studentList = newList;
    console.log(`Student ${studentName.name} has been REMOVED from the system.`);
  }
}

let person1 = new Person("Marcos", 26, "547896");
let student1 = new Student("Miguel", "17", "587936", "9.5");
let teacher1 = new Teacher("Manoel", "38", "257896", "Spanish");
let school = new School();

// student1.CPF = "898765"

person1.viewPersonData();
console.log("---------------------------");
student1.viewPersonData();
console.log("--------------------------");
teacher1.viewPersonData();

console.log("--------------------------\n");

school.addStudent(student1);
school.addTeacher(teacher1);

// school.removeStudent(student1);
// school.removeTeacher(teacher1);
class Person {
  #cpf;
  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.#cpf = cpf;
  }

  get CPF() {
    return "*".repeat(this.#cpf.length);
  }

  set CPF(newCPF) {
    if (newCPF.length < 6) {
      console.log("INVALID! It needs to have 6 characters.");
    } else {
      this.#cpf = newCPF;
      console.log("CPF has been UPDATED!");
    }
  }

  viewPersonData() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`CPF: ${this.CPF}`);
  }
}

class Student extends Person {
  constructor(name, age, cpf, grade) {
    super(name, age, cpf);
    this.grade = grade;
  }

  viewPersonData() {
    super.viewPersonData();
    console.log(`Grade: ${this.grade}`);
  }
}

class Teacher extends Person {
  constructor(name, age, cpf, subject) {
    super(name, age, cpf);
    this.subject = subject;
  }

  viewPersonData() {
    super.viewPersonData();
    console.log(`Subject: ${this.subject}`);
  }
}

class School {
  constructor() {
    this.studentList = [];
    this.teacherList = [];
  }

  addTeacher(newTeacher) {
    this.teacherList.push(newTeacher);
    console.log(`Teacher: ${newTeacher.name} has been added to the system.`);
  }

  removeTeacher(teacherName) {
    let newList = [];
    for (let index = 0; index < this.teacherList.length; index++) {
      if (this.teacherList[index] !== teacherName) {
        newList.push(this.teacherList[index]);
      }
    }
    this.teacherList = newList;
    console.log(`Teacher ${teacherName.name} has been REMOVED from the system.`);
  }

  addStudent(newStudent) {
    this.studentList.push(newStudent);
    console.log(`Student: ${newStudent.name} has been added to the system.`);
  }

  removeStudent(studentName) {
    let newList = [];
    for (let index = 0; index < this.studentList.length; index++) {
      if (this.studentList[index] !== studentName) {
        newList.push(this.studentList[index]);
      }
    }
    this.studentList = newList;
    console.log(`Student ${studentName.name} has been REMOVED from the system.`);
  }
}

let person1 = new Person("Marcos", 26, "547896");
let student1 = new Student("Miguel", "17", "587936", "9.5");
let teacher1 = new Teacher("Manoel", "38", "257896", "Spanish");
let school = new School();

// student1.CPF = "898765"

person1.viewPersonData();
console.log("---------------------------");
student1.viewPersonData();
console.log("--------------------------");
teacher1.viewPersonData();

console.log("--------------------------\n");

school.addStudent(student1);
school.addTeacher(teacher1);

// school.removeStudent(student1);
// school.removeTeacher(teacher1);
