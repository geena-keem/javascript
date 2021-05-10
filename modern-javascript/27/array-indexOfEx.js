const arr = [1, 2, 3, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr.indexOf(2)); // 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
console.log(arr.indexOf(4)); // -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr.indexOf(2, 2)); // 2




// const foods = ['apple', 'banana', 'orange'];

// // foods 배열에 'orange' 요소가 존재하는지 확인한다.
// if (foods.indexOf('orange') === -1) {
//     // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
//     foods.push('orange');
// }

// console.log(foods); // [ 'apple', 'banana', 'orange' ]



// indexOf 대신 ES7에 도입된 includes 메서드를 사용하면 가독성이 좋아진다.
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (!foods.includes('orange')) {
    // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
    foods.push('orange');
}

console.log(foods); // [ 'apple', 'banana', 'orange' ]