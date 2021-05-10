// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Keem');


console.log(Person.prototype === me.__proto__); // true