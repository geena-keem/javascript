// 인수가 전달되지 않은 매개변수의 값
function sum(x, y) {
    return x + y;
}
console.log(sum(1)); // NaN



// 위 코드의 방어 코드
function sum(x, y) {
    // 인수가 전달되지 않아 매개변수의 값이 undefinde인 경우 기본값을 할당한다.
    x = x || 0;
    y = y || 0;

    return x + y;
}
console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1


// ES6에 도입된 매개변수 기본값을 사용하면 인수 체크 및 초기화를 간소화할 수 있다.
function sum(x = 0, y = 0) {
    return x + y;
}
console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1


// 매개변수 기본값은 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효
function logName(name = 'Keem') {
    console.log(name);
}

logName(); // Keem
logName(undefined); // Keem
logName(null); // null


// Rest 파라미터에는 기본값을 지정할 수 없다.
// function foo(...rest = []) {
//     console.log(rest);
// }
// SyntaxError: Rest parameter may not have a default initializer


// 매개변수 기본값은 함수 객체의 length와 arguments에 영향을 주지 않는다.
function  sum(x, y = 0) {
    console.log(arguments);
}

console.log(sum.length); // 1

sum(1); // [Arguments] { '0': 1 }
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }