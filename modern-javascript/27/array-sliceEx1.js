// const arr = [1, 2, 3];

// // arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
// console.log(arr.slice(0, 1)); // [ 1 ]

// // arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
// console.log(arr.slice(1, 2)); // [ 2 ]

// // 원본은 변경되지 않는다.
// console.log(arr); // [ 1, 2, 3 ]




// // 두 번째 인수를 생략했을때
// const arr = [1, 2, 3];

// // arr[1]부터 이후 모든 요소를 복사해서 반환.
// console.log(arr.slice(1)); // [ 2, 3 ]




// // 첫 번째 인수가 음수인 경우
// const arr = [1, 2, 3];

// // 배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
// console.log(arr.slice(-1)); // [ 3 ]

// // 배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
// console.log(arr.slice(-2)); // [ 2, 3 ]




// 인수를 모두 생략하면 원본 배열의 복사본을 생성해서 반환
const arr = [1, 2, 3];

const copy = arr.slice();

console.log(copy); // [ 1, 2, 3 ]
console.log(copy === arr); // false