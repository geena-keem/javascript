// 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
function nomal(a, a) { return a + a; }
console.log(nomal(1, 2));


// 화살표 함수는 중복된 매개변수 이름을 선언하면 에러가 발생한다.
const arrow = (a, a) => a + a;
// SyntaxError: Duplicate parameter name not allowed in this context