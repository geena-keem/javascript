// const arr = [1, 2, 3];

// // 배열 요소의 삭제
// delete arr[1];
// console.log(arr); // [ 1, <1 empty item>, 3 ] 희소배열이 됌..

// // length 프로퍼티에 영향을 주지 않는다. 
// console.log(arr.length); // 3





// 희소배열을 만들지 않고 완전 삭제 방법
const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr[1]부터 1개의 요소를 제거
arr.splice(1, 1);
console.log(arr); // [1, 3]

// length 프로퍼티가 자동 갱신된다.
console.log(arr.length); // 2