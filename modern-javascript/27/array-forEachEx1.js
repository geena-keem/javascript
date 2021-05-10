const numbers = [1, 2, 3];
const pows = [];

// // for 문으로 배열 순회
// for (let i = 0; i < numbers.length; i++) {
//     pows.push(numbers[i] ** 2);
// }

// console.log(pows); // [ 1, 4, 9 ]


// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [ 1, 4, 9 ]