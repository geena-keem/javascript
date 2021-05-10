// const arr = [1, 2, 3];

// // 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
// console.log(arr.fill(0)); // [ 0, 0, 0 ]

// // fill 메서드는 원본 배열을 직접 변경한다.
// console.log(arr); // [ 0, 0, 0 ]



// // 두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
// const arr = [1, 2, 3];
// // 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
// console.log(arr.fill(0, 1)); // [ 1, 0, 0 ]

// // fill 메서드는 원본 배열을 직접 변경한다.
// console.log(arr); // [ 1, 0, 0 ]



// // 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
// const arr = [1, 2, 3, 4, 5];
// // 인수로 전달받은 값 0을 배열의 인덱스 1부터 3이전(인덱스 3 미포함)까지 요소로 채운다.
// console.log(arr.fill(0, 1, 3)); // [ 1, 0, 0, 4, 5 ]



// fill 메서드를 사용하여 배열을 생성하면서 특정 값으로 요소를 채우기
const arr = new Array(3);
console.log(arr); // [ <3 empty items> ]

// 인수로 전달 받은 값 1을 배열의 처음부터 끝까지 요소로 채운다.
const result = arr.fill(1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [ 1, 1, 1 ]

// fill 메서드는 변경된 원본 배열을 반환한다.
console.log(result);



// Array.from 메서드를 사용
// 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채운다.
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
// const sequences = (length = 0) => Array.from(new Array(length), (_, i) => i);

console.log(sequences(5)); // [ 0, 1, 2, 3, 4 ]