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

//10-11
var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10

//10-12
const person = {
  name: "Baek",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Baek

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); // Baek

//10-13
const person = {
  name: "Baek",
};

console.log(person[name]); // ReferenceError : name is not defined

//10-14
const person = {
  name: "Baek",
};

console.log(person.age); // undefined

//10-15
const person = {
  "last-name": "Baek",
  1: 10,
};

person.'last-name'; // -> SyntaxError
person.last-name; // -> 브라우저 환경 : NaN, Node.js 환경 : ReferenceError: name is not defined
person[last-name]; // -> ReferenceError: last is not defined
person['last-name']; // -> Baek

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1; // -> SyntaxError: Unexpected number
person.'1'; // SyntaxError: Unexpected string
person[1]; // -> 10 : person[1] -> person['1']
person['1']; // -> 10

//10-16
var person = {
    name: 'Baek'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person); // {name: 'Kim'}

//10-17
var person = {
    name : 'Baek'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: 'Baek', age: 20}

//10-18
var person = {
    name : 'Baek'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러 발생 x
delete person.address;

console.log(person); // {name: "Baek"}