const sum = (a, b) => {
    const result = a + b;
    return result;
};

console.log(sum(1, 2)); // 3


// 화살표 함수를 즉시 실행함수로도 사용이 가능하다.
const person = (name => ({
    sayHi() {return `Hi! My name is ${name}.`;}
}))('Keem');

console.log(person.sayHi()); // Hi! My name is Keem.



// ES5
[1, 2, 3].map(function (v) {
    return v * 2;
});

// ES6
[1, 2, 3].map(v => v * 2);