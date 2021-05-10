// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj = {x: 1, y: 2};
const copy = {...obj};
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false


// 객체 병합
const merge = {x: 1, y: 2, ...{a: 3, b: 4}};
console.log(merge); // { x: 1, y: 2, a: 3, b: 4 }


// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = Object.assign({}, {x: 1, y: 2,}, {y: 10, z: 3});
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = Object.assign({}, {x: 1, y: 2}, {y: 100});
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = Object.assign({}, {x: 1, y: 2}, {z: 0});;
console.log(added); // { x: 1, y: 2, z: 0 }


// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위차한 프로퍼티가 우선권을 갖는다.
const merged2 = {...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(merged2); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed2 = {...{x: 1, y:2}, y: 100};
console.log(changed2); // {x: 1, y: 100}

// 프로퍼티 추가
const added2 = {...{x: 1, y: 2}, z: 0};
console.log(added2); // {x: 1, y: 2, z: 0}
