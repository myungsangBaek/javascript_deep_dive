// 10-01
var person = {
  name: "Baek",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

console.log(typeof person); // object
console.log(person); //{name: "Lee", sayHello: f}

// 10-02
var empty = {}; // 빈 객체
console.log(typeof empty); //object
