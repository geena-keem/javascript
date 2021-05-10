function Person(name) {
    this.name = name;
}

Person.prototype = {
    // constructor 프로퍼티와 생성자 함수간의 연결을 재설정
    constructor: Person,
    sayHi() { console.log(`Hi! ${this.name}`) }
};

const person = new Person('Keem');
person.sayHi(); // Hi Keem