// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Keem');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가
console.log(me instanceof Person);

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Object);

console.log(parent instanceof Object);

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

// Person.prototype이  me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Person);

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Object);

console.log(Person.prototype === parent); // true
console.log(parent.constructor === Person); // false
console.log(parent.constructor === Object); // true