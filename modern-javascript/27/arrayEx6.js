// const arr = [1, 2, 3, 4, 5];

// // 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
// arr.length = 3;

// // 배열의 길이가 5에서 3으로 준다.
// console.log(arr); // [1, 2, 3]



// const arr = [1, 4, 5, 3, 2];

// // 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
// arr.length = 3;

// // 배열의 길이가 5에서 3으로 준다.
// console.log(arr); // [ 1, 4, 5 ]



const arr = [1];

// 현재 length 프로퍼티 값인 1보다 큰 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
console.log(arr.length); // 3
console.log(arr); // [ 1, <2 empty items> ]

console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
     '0': { value: 1, writable: true, enumerable: true, configurable: true },
     length: { value: 3, writable: true, enumerable: false, configurable: false }
    }
*/