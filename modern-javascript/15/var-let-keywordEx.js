// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1



// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
//console.log(bar); // SyntaxError: Identifier 'foo' has already been declared

let bar; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(bar); // undefined

bar = 1; // 할당문에서 할당 단계가 실행된다.
console.log(bar); // 1