// 익명 즉시 실행 함수
console.log(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());


// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}()); 

console.log(foo()); // ReferenceError: foo is not defined