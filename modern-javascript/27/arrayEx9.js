const arr = [0];


// 배열의 요소 추가
arr[1] = 1;

console.log(arr); // [0, 1]
console.log(arr.length); // 2

arr[100] = 100;

console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr.length); // 101


// 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
    {
     '0': { value: 0, writable: true, enumerable: true, configurable: true },
     '1': { value: 1, writable: true, enumerable: true, configurable: true },
     '100': { value: 100, writable: true, enumerable: true, configurable: true },
     length: {
                value: 101,
                writable: true,
                enumerable: false,
                configurable: false
              }
    }
*/

// 요소값의 갱신
arr[1] = 10;
console.log(arr); // [ 0, 10, <98 empty items>, 100 ]