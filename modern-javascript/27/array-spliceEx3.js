// const arr = [1, 2, 3, 4];

// // 원본 배열의 인덱스 1부터 모든 요소를 제거한다.
// const result = arr.splice(1);
// console.log(arr); // [ 1 ]

// console.log(result); // [ 2, 3, 4 ]




// indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음에 특정 요소를 제거
// const arr = [1, 2, 3, 1, 2];

// // 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
// function remove(array, item) {
//     // 제거할 item 요소의 인덱스를 취득한다.
//     const index = array.indexOf(item);
//     console.log(index);

//     // 제거할 item 요소가 있다면 제거한다.
//     if (index !== -1) array.splice(index, 1);

//     return array;
// }


// console.log(remove(arr, 2)); // [ 1, 3, 1, 2 ]
// console.log(arr);
// //console.log(remove(arr, 10)); // [ 1, 3, 1, 2 ] 
// // console.log(remove(arr, 2)); 코드에서 이미 원본이 변경되어 [ 1, 3, 1, 2 ]가 반환된다.
// // arr엔 10이 없기에 변경된 arr이를 반환한다.




// filter 메서드를 사용하여 특정 요소를 제거
const arr = [1, 2, 3, 1, 2];

// 배열 array에서 모든 item 요소를 제거한다.
function removeAll(array, item) {
    return arr.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // [ 1, 2, 3 ]