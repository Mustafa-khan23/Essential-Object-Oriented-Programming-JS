class Person { //class creation
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi I'm ${this.name}`);
  }
}

let p1 = new Person("Mustafa", 19); //instance of class
let p2 = new Person("Musab", 11);

//this is the best and efficient way to manage big data