// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this); // window
    return number * number;
}
square(2);

const person = {
    name: 'Keem',
    getName() {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this); // {name: "Keem", getName: f}
        return this.name;
    }
};
console.log(person.getName());

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this);
}

const me = new Person('Lee');