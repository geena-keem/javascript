const arr = [1, 2, 3];

console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 반복문으로 자료구조를 순서대로 순회하기 위해서는 자료구조의 요소에 순서대로 접근할 수 있어야 하며
// 자료구조의 길이를 알 수 있어야 한다.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3
}