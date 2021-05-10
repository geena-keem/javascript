function countdown(n) {
    for (var i = n; i >= 0; i--)
    console.log(i);
}

countdown(10);


// 반복문 없이 재귀함수를 사용해서 !
function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);



// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    // 탈출 조건: n이 1이하일 때 재귀 호출을 멈춘다.
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));



// 함수 표현식
var factorial = function foo(n) {
    // 탈출 조건: n이 1이하일 때 재귀 호출을 멈춘다.
    if( n <= 1) return 1;
    // 함수를 가르키는 식별자로 자기 자신을 재귀 호출
    return n * factorial(n - 1);
    
    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    //console.log(factorial === foo); //true
    //return n * foo(n - 1);
};

console.log(factorial(5));



// 반복문을 이용한 재귀 호출
function factorial(n) {
    if(n <= 1) return 1;
    
    var res = n;
    while (--n) res *= n;
    return res;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

