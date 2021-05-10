class Person {
    // private 필드 정의
    #name = '';

    constructor(name) {
        // private 참조
        this.#name = name;
    }
}

const me = new Person('Keem');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class