'use strict';

// Array🎈

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
// 배열의 마지막을 찾을 때는 총 길이의 -1을 해주면 된다!
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach: array안에 있는 value들 마다 전달한 function을 출력한다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
// 위 코드를 화살표 함수로 재정의
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 복숭아 제거
fruits.pop(); // 딸기 제거
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍇', '🍋');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift(); // 포도 제거
fruits.shift(); // 레몬 제거
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push처럼 배열 마지막 빈 공간(index)에 데이터에서 추가/삭제 하기때문에 기존에 있던 데이터들은 움직이지 않아도 되서 빠르다.
// unshift는 기존에 있던 데이터들을 index[0] => index[1]으로 옮긴 후 index[0]에 데이터를 추가 하고
// 반대로 shift는 index[0]에 데이터를 삭제한 후 index[1] => index[0]으로 옮겨오기 때문에 느리다.
// 즉, 가능하면 shift, unshift 대신 pop과 push를 사용하는게 좋다!

// splice: remove an item by index position
// 첫 번째 인자는 어디서부터 remove할 것인지 index number를 지정해 주고
// 두 번째 인자는 몇개를 remove할 것인지 지정해준다. (값을 지정해도 되고 안해줘도 된다.)
// 세 번째 인자는 remove된 index에 들어갈 데이터 값을 지정해 준다.
fruits.push('🍑', '🍒', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 바나나만 제거
console.log(fruits);
// fruits.splice(1, 0, '🍍', '🥝'); // 데이터를 지우지 않고 원하는 부분에 데이터를 추가할 수 있다.
fruits.splice(1, 1, '🍍', '🥝');
console.log(fruits); // 복숭아가 제거된 자리에 파인애플, 키위가 추가된다.

// concat: combine two arrays
const fruits2 = ['🥥', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
// 5. Searching
// indexOf: find the index
// index 몇 번째에 데이터가 들어 있는지 !
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🥝')); // 2
console.log(fruits.indexOf('🍑')); // 없는 데이터를 입력하면 -1

// includes: array에 데이터가 있는지 없는지 !
console.log(fruits.includes('🥝')); // true
console.log(fruits.includes('🍑')); // false

// lastIndexOf
// indexOf와는 반대로
fruits.push('🍎');
console.log(fruits); // ["🍎", "🍍", "🥝", "🍒", "🍋", "🍎"]
// indexOf는 제일 첫 번째로 해당하는 값을 만나면 그 값이 들어있는 index를 리턴하고
console.log(fruits.indexOf('🍎'));
// lastIndexOf는 마지막에 해당하는 값을 만나면 그 값이 들어있는 index를 리턴한다.
console.log(fruits.lastIndexOf('🍎'));
