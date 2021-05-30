'use strict';
// class
// - template
// - declare once
// - no data in

// object
// - instance of a class
// - created many times
// - data in

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
    // this는 생성된 object를 가리킨다.
  }
}
const gee = new Person('gee', 29);
console.log(gee.name);
console.log(gee.age);
gee.speak(); // gee: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  // set은 값을 설정해야되기 때문에 value를 받아와야한다.
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0; // 클래스 내부에서만 값이 보여지고 접근이 가능하며 변경이 가능하다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
// - TypeScript할 때 많이 쓰인다.
// - object, data에 상관없이 공통적으로 class에서 사용하는 것이라면
//   static과 static method를 작성하는 것이 메모리의 사용을 줄여준다.
class Article {
  static publisher = 'home sweet home!';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined!
// static은 object마다 할당되어지는 것이 아니라 class자체에 붙어 있기 때문에 undefined!
console.log(Article.publisher);
Article.printPublisher();
// static 함수를 호출할때도 class 이름을 이용해서 호출해야한다!

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모(Shape class)의 draw함수를 호출
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 좌측에 있는 object가 우측에 있는 class의 instance인지 아닌지
// object가 class에 의해 생성된 것인지 check!
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle color: red
