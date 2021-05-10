const arr = ['apple', 'banana', 'orange'];

console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[2]); // orange

console.log(arr.length); //3


// 배열의 순회
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // apple banana orange
}

console.log(typeof arr); // object