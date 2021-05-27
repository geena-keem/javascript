// 1. Use strict
// added in ES5
// use this for vanila Javascript.
'use strict';

// 2. Variable 변수, rw(read/write) 메모리의 값을 읽고 쓰는 것이 가능하다
//    let (added in ES6)
console.log(age);
let globalName = 'global name';
{
  let name = 'gee-na';
  console.log(name);
  name = 'hello!';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅이란 어디에서 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것이다.
// has no block scope! var는 block scope이 없으며 block을 무시한다.
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant 상수, r(read only) 읽기만 가능하다
// use const whenever possible. 가능한 const를 사용!
// only use let if variable nedds to change. 변수를 변경해야하는 경우에만 let을 사용!

// 값이 계속 변경될 수 있는 것을 mutable data type이라고 하며
// 바이러스도 mutation을 통해서 계속 유전자 서열을 바꿔나간다.
// 데이터 타입도 변경이 가능한 mutable data type이 let이며
// constants는 변경이 불가능하기 때문에 immutable data type이라 불린다.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types(기본 타입), frozen objects(고정된 객체) (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS (기본적으로 모든 객체는 JS에서 변경이 가능하다)
// 메모리에 저장되는 타입은 크게 2가지 이며 primitive type과 object타입이 있다.
// primitive type은 값 자체가 메모리에 저장된다.
// object type은 크기가 너무 커서 메모리에 한번에 올라갈 수 없으며 reference를 통해 메모리에 저장한다.

// favor immutable data type always for a few reasons:
// - security 보안
// - thread safety 스레드 안전성
// - reduce human mistakes 실수 감소

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // value: 1234567890123456789012345678901234567890, type: bigint
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // === let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 스트링이 동일하여 동일한 심볼을 만들고 싶을때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// 심볼은 바로 출력하게 되면 에러가 발생하므로 항상 뒤에 .description을 이용해서 스트링으로 변환 후 출력해야 한다.

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language (동적 입력 언어)
// 자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고
// 런타임 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다는 것

// 하지만 다수의 엔지니어들 혹은 규모가 있는 프로젝트를 만들때 Dynamic typing 때문에 생기는 문제들이 있다. (아래 예제 참고)
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
console.log(text.charAt(0)); // 에러
