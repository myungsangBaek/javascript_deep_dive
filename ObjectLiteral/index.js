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

//10-03
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

//10-04
var person = {
  firstName: "Han", // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  "last-name": "Baek", // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
  //   last-name: 'Baek' // SyntaxError
};

//10-06
var obj = {};
var key = "hello";

//ES5: 프로퍼티 키 동적 생성
obj[key] = "world";
//ES6: 계산된 프로퍼티 이름
//var obj = { [key] : 'world' };

console.log(obj); // {hello: "world"}

//10-08
var foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo); //{0: 1, 1: 2, 2: 3}

//10-09
var foo = {
  name: "Baek",
  name: "Han",
};

console.log(foo); // {name : "Han"}
