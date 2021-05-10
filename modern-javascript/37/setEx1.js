const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) { 1, 2, 3 }

const set2 = new Set('hello');
console.log(set2); // Set(4) { 'h', 'e', 'l', 'o' }

// 배열의 중복 요소 제거
const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// Set을 사용한 중복 제거
const uniq2 = array => [...new Set(array)];
console.log(uniq2([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]




// Set.prototype.size를 사용하여 요소 개수 확인
const {size} = new Set([1, 2, 3, 3]);
console.log(size); // 3

const set = new Set([1, 2, 3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
/*
    {
    get: [Function: get size],
    set: undefined,
    enumerable: false,
    configurable: true
    }
*/
set.size = 10; // size프로퍼티는 getter 함수만 존재하는 접근자 프로퍼티임 
console.log(set.size); // 3


// Set.prototype.add를 사용하여 요소 추가
const set3 = new Set();
console.log(set3); // Set(0) {}

set3.add(1);
console.log(set3); // Set(1) { 1 }

set3.add(2).add(3).add(3);
console.log(set3); // Set(3) { 1, 2, 3 }



const set4 = new Set();
set4
    .add(1)
    .add('a')
    .add(true)
    .add(false)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => {});
console.log(set4); // Set(9) {1, 'a', true, false, undefined, null, {}, [], [Function (anonymous)}



// Set.prototype.has를 사용하여 요소 존재 확인
const set5 = new Set([1, 2, 3, 4]);
console.log(set5.has(1)); // true
console.log(set5.has(5)); // false

// 요소 4를 삭제한다.
set5.delete(5);
console.log(set5); // Set(4) { 1, 2, 3, 4 }
// 요소 1을 삭제한다.
set5.delete(1);
console.log(set5); // Set(3) { 2, 3, 4 }



// Set.prototype.clear를 사용하여 요소 일괄 삭제
const set6 = new Set([1, 2, 3, 4]);
set6.clear();
console.log(set6); // Set(0) {}