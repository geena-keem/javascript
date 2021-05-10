// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
// console.dir => 함수 객체의 프로퍼티까지 출력
// 단, node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // 크롬 개발자 도구에서 실행한 결과: ƒ add(x, y) 

// 함수 호출
console.log(add(2, 5)); // 7

