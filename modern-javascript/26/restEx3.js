// 1
// // 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
// function sum() {
//     // 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
//     console.log(arguments);
// }

// sum(1, 2); // [Arguments] { '0': 1, '1': 2 }



// 2
// function sum() {
//     // 유사 배열 객체인 arguments 객체를 배열로 반환한다.
//     var array = Array.prototype.slice.call(arguments);

//     return array.reduce(function (pre, cur) {
//         return pre + cur;
//     }, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15



// 3 화살표 함수 + Rest 파라미터  
function sum(...args) {
    // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15