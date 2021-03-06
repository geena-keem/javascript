'use strict';

// Array๐

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
// ๋ฐฐ์ด์ ๋ง์ง๋ง์ ์ฐพ์ ๋๋ ์ด ๊ธธ์ด์ -1์ ํด์ฃผ๋ฉด ๋๋ค!
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
// c. forEach: array์์ ์๋ value๋ค ๋ง๋ค ์ ๋ฌํ function์ ์ถ๋ ฅํ๋ค.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
// ์ ์ฝ๋๋ฅผ ํ์ดํ ํจ์๋ก ์ฌ์ ์
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // ๋ณต์ญ์ ์ ๊ฑฐ
fruits.pop(); // ๋ธ๊ธฐ ์ ๊ฑฐ
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('๐', '๐');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift(); // ํฌ๋ ์ ๊ฑฐ
fruits.shift(); // ๋ ๋ชฌ ์ ๊ฑฐ
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push์ฒ๋ผ ๋ฐฐ์ด ๋ง์ง๋ง ๋น ๊ณต๊ฐ(index)์ ๋ฐ์ดํฐ์์ ์ถ๊ฐ/์ญ์  ํ๊ธฐ๋๋ฌธ์ ๊ธฐ์กด์ ์๋ ๋ฐ์ดํฐ๋ค์ ์์ง์ด์ง ์์๋ ๋์ ๋น ๋ฅด๋ค.
// unshift๋ ๊ธฐ์กด์ ์๋ ๋ฐ์ดํฐ๋ค์ index[0] => index[1]์ผ๋ก ์ฎ๊ธด ํ index[0]์ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐ ํ๊ณ 
// ๋ฐ๋๋ก shift๋ index[0]์ ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ ํ index[1] => index[0]์ผ๋ก ์ฎ๊ฒจ์ค๊ธฐ ๋๋ฌธ์ ๋๋ฆฌ๋ค.
// ์ฆ, ๊ฐ๋ฅํ๋ฉด shift, unshift ๋์  pop๊ณผ push๋ฅผ ์ฌ์ฉํ๋๊ฒ ์ข๋ค!

// splice: remove an item by index position
// ์ฒซ ๋ฒ์งธ ์ธ์๋ ์ด๋์๋ถํฐ removeํ  ๊ฒ์ธ์ง index number๋ฅผ ์ง์ ํด ์ฃผ๊ณ 
// ๋ ๋ฒ์งธ ์ธ์๋ ๋ช๊ฐ๋ฅผ removeํ  ๊ฒ์ธ์ง ์ง์ ํด์ค๋ค. (๊ฐ์ ์ง์ ํด๋ ๋๊ณ  ์ํด์ค๋ ๋๋ค.)
// ์ธ ๋ฒ์งธ ์ธ์๋ remove๋ index์ ๋ค์ด๊ฐ ๋ฐ์ดํฐ ๊ฐ์ ์ง์ ํด ์ค๋ค.
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 1); // ๋ฐ๋๋๋ง ์ ๊ฑฐ
console.log(fruits);
// fruits.splice(1, 0, '๐', '๐ฅ'); // ๋ฐ์ดํฐ๋ฅผ ์ง์ฐ์ง ์๊ณ  ์ํ๋ ๋ถ๋ถ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ  ์ ์๋ค.
fruits.splice(1, 1, '๐', '๐ฅ');
console.log(fruits); // ๋ณต์ญ์๊ฐ ์ ๊ฑฐ๋ ์๋ฆฌ์ ํ์ธ์ ํ, ํค์๊ฐ ์ถ๊ฐ๋๋ค.

// concat: combine two arrays
const fruits2 = ['๐ฅฅ', '๐'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
// 5. Searching
// indexOf: find the index
// index ๋ช ๋ฒ์งธ์ ๋ฐ์ดํฐ๊ฐ ๋ค์ด ์๋์ง !
console.log(fruits.indexOf('๐')); // 0
console.log(fruits.indexOf('๐ฅ')); // 2
console.log(fruits.indexOf('๐')); // ์๋ ๋ฐ์ดํฐ๋ฅผ ์๋ ฅํ๋ฉด -1

// includes: array์ ๋ฐ์ดํฐ๊ฐ ์๋์ง ์๋์ง !
console.log(fruits.includes('๐ฅ')); // true
console.log(fruits.includes('๐')); // false

// lastIndexOf
// indexOf์๋ ๋ฐ๋๋ก
fruits.push('๐');
console.log(fruits); // ["๐", "๐", "๐ฅ", "๐", "๐", "๐"]
// indexOf๋ ์ ์ผ ์ฒซ ๋ฒ์งธ๋ก ํด๋นํ๋ ๊ฐ์ ๋ง๋๋ฉด ๊ทธ ๊ฐ์ด ๋ค์ด์๋ index๋ฅผ ๋ฆฌํดํ๊ณ 
console.log(fruits.indexOf('๐'));
// lastIndexOf๋ ๋ง์ง๋ง์ ํด๋นํ๋ ๊ฐ์ ๋ง๋๋ฉด ๊ทธ ๊ฐ์ด ๋ค์ด์๋ index๋ฅผ ๋ฆฌํดํ๋ค.
console.log(fruits.lastIndexOf('๐'));
