function Person(name) {
    this.name = name;
}

person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Keem');

// getName 메서드를 호출한 객체는 me다.
console.log(me.getName()); // Keem

Person.prototype.name = 'Lee';

// getName 메서드를 호출한 객체는 Person.prototype
console.log(Person.prototype.getName()); // Lee