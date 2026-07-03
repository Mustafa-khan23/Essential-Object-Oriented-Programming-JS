let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

array1.sayHello = () => {
  console.log("Hello user!");
};

array2.sayHello = () => {
  console.log("Hello user!");
};

console.log(array1.sayHello === array2.sayHello); //false

/* Returns 'false' here everyThing is same even the string part but JavaScript
creates another array's function memory for sayHello function */

//To overcome with this problem : here is the concept of prototype object
Array.prototype.sayHello = function () {
  console.log("Hello User");
};
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

console.log(arr1.sayHello === arr2.sayHello); //true
//one protoType is created and this is efficient way
