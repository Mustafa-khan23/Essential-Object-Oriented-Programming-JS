function Person(name, age) {
  //constructor
  this.name = name;
  this.age = age;
}
//constructor are the special method that dosen't return anything

Person.prototype.talk = function () {
  //prototype created
  console.log(`Hi my name is ${this.name}`);
};

let p1 = new Person("mustafa", 19); //instance of the function
let p2 = new Person("Musab", 11);
//con: This is a better way then factoryFunction
