function Person(name, age) {
    this.name = name; // public
    let _age = age; // private

    // 인스턴스 메서드
    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
}

const me = new Person('Keem', 29);
me.sayHi(); // Hi! My name is Keem. I am 29.
console.log(me.name); // Keem
console.log(me._age); // undefinde

const you = new Person('Lee', 20);
you.sayHi(); // Hi! My name is Lee. I am 20.
console.log(you.name); // Lee
console.log(you._age); // undefinde

