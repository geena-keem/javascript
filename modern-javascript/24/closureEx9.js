const Person = (function () {
    let _age = 0; // private

    // 생성자 함수
    function Person(name, age) {
        this.name = name; // public
        _age = age;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Keem', 29);
me.sayHi(); // Hi! My name is Keem. I am 29.
console.log(me.name); // Keem
console.log(me._age); // undefinde

const you = new Person('Lee', 20);
you.sayHi(); // Hi! My name is Lee. I am 20.
console.log(you.name); // Lee
console.log(you._age); // undefinde
