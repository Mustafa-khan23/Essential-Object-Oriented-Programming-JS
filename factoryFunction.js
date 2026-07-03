//this is a factory function like a template once created and increases the reusabiltiy

function greetUser(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello Mr.${this.name}`);
    },
  };
  return person;
}

const p1 = greetUser("Mustfa", 19);
const p2 = greetUser("Wanda", 39); //persons created like objects

//Note: this is not efficient way to deal with this coz each user creates memory from copying the template.
//example:
console.log(p1.talk === p2.talk); //false

//To make code more we'll use Classes and Ojbects