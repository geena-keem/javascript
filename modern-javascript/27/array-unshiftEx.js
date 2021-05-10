// const arr = [1, 2];

// // 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
// let result = arr.unshift(3, 4);
// console.log(result); // 4

// // unshift 메서드는 원본 배열을 직접 변경한다.
// console.log(arr); // [ 3, 4, 1, 2 ]




// 위 예제를 스프레드 문법으로 사용
const arr = [1, 2];

const newArr = [3, ...arr];
console.log(newArr); // [ 3, 1, 2 ]
console.log(arr); // [1, 2]