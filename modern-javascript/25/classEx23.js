const base = {
    name: 'Keem',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    // ES6 메서드 축약 표현으로 정의한 메서드이다. 따라서 [[HomeObject]]를 갖는다.
    sayHi() {
        return `${super.sayHi()}. how are you doing?`;
    }
};

console.log(derived.sayHi()); // Hi! Keem. how are you doing?