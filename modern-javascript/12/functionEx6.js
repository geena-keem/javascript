// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

console.log(result); // 3



// 위 코드 주석처리 후 실행
function add(x, y) {
    console.log(x, y);
    return x + y;
}

console.log(add(2, 5));

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined