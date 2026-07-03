class Person {
  //base class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    //member funciton
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  //Derived class
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
  printMarks() {
    console.log(`${this.name} has ${this.marks}`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

let s1 = new Student("mustafa", 18, 85); //instance of a Student class
let t1 = new Teacher("Faiza", 21);
