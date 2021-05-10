// const arr = [1, 2, 3];
// console.log(arr.length); // 3


// const arr = [];
// console.log(arr.length); // 0


const arr = [1, , 3];
// 희소 배열의 length는 배열의 실제 요소 개수보ㅓ다 언제나 크다.
console.log(arr.length); // 3
console.log(arr); // [ 1, <1 empty item>, 3 ]
console.log(arr[1]); // undefinde
