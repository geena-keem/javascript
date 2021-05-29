// Function
// - fundamental building block in the program
// - subprogram can be used  multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing (하나의 함수는 한가지 일만 하도록 해야한다!)
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint (이런식으로 나눠서 작성하는게 좋다)
// function is object in JS (자바스크립트에서 함수는 객체이다)
function printHello() {
  console.log('Hello!');
}
printHello();

function log(message) {
  console.log(message);
}
// 자바스크립트는 타입이 없어 string, number로 전달해야하는지 명확하지 않아
// number를 입력해도 문자열로 변환이 되어 출력이 된다.
log('Hi!');
log(1234);
// Typescript (타입이 정확히 명시되어야 하는 경우)
// - 규모있는 프로젝트
// - 라이브러리 형태로 api를 제공해야하는 경우
// 파라미터 타입은 string 리턴 타입은 number
// function typeScript(message: string): number {
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// premitive parameters: passed by value 값으로 전달
// object parameters: passed by reference 참조로 전달
function changeName(obj) {
  obj.name = 'gee';
}
const haa = { name: 'haa' };
changeName(haa);
console.log(haa);
// => object는 refernce로 전달되기 때문에 함수 안에서 object 값을 변경하게 되면
//    변경된 사항이 그대로 메모리에 적용되기 때문에 추후에 변경된 사항들을 확인할 수 있다.

// 3. Default parameters (added in ES6)
// parameter 옆에 원하는 default 값을 지정해 놓으면 사용자가 파라미터를 전달하지 않을 때 정해진 default값이 대체되어 사용된다.
function showMessage(message, from = 'unknown') {
  //   if (from === undefined) {
  //     from = 'unknown';
  //   }
  // => 예전엔 파라미터의 값이 전달되지 않을 경우를 대비해서 from이 undefined 경우이면 if문을 통해 다른 값 전달했다
  console.log(`message: ${message}, from: ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6): 배열 형태로 전달된다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 위 예제보다 더 간단한 for문을 사용할땐 for...of
  // for (변수선언문 of 이터러블) {...}
  for (const arg of args) {
    console.log(arg);
  }

  // 더 간단하게
  args.forEach((arg) => console.log(arg));
}
printAll('home', 'sweet', 'home');

// 5. Local scope
// "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다."
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'Hello!';
  console.log(message); // local variable
  console.log(globalMessage);
  // 중첩 함수
  // 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수 접근이 가능한 것을 closer라 한다.
  function printAnother(message) {
    console.log(message);
    let childMessage = 'Hi!';
  }
  // console.log(childMessage); // error!
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad!
// - 블록 안에서 로직을 많이 작성할 경우 가독성이 떨어진다.
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good!
// - 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료하고
//   조건이 맞을 때만 필요한 logic들을 실행하는게 좋다.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable (함수는 다른 변수처럼 취급한다.)
// can be assigned as a value to variable (변수에 값으로 할당이 가능하다.)
// can be passed as an argument to other functions. (다른 함수에 인수로 전달이 가능하다.)
// can be returned by another function (다른 함수에 의해 반환될 수 있다.)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it. (실행이 도달하면 함수 표현식이 생성)
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print; // 다른 변수에 할당
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Function declaration과 Function expression 차이점
// => function expression은 할당된 다음부터 호출이 가능한 반면
//    function declaration은 hoisted가 가능하다. (함수가 선언되기 이전에 호출이 가능)
// 위 예제에 있는 sum함수를 정하기도 전에 호출이 가능하며 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // 두 가지의 callback function이 parameter로 전달되어 조건에 맞게 callback function을 호출한다.
  if (answer === 'home sweet home!') {
    printYes();
  } else {
    printNo();
  }
}

// printYes는 anonymous function
const printYes = function () {
  console.log('yes!');
};

// printNo는 named function
// better debugging in debugger's stack traces
// recursions (재귀)
const printNo = function print() {
  console.log('no...');
  // print(); // 피보나치 수를 계산 혹은 반복되는 평균 값을 계산할때 등등 사용하는게 좋다.
  // 계속 무한대로 호출하게 되면 call stack에 꽉 차서 에러가 난다.
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('home sweet home!', printYes, printNo);

// Arrow function
// - always anonymous!
// - 함수를 간결하게 정의할 수 있다.
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// 함수 안에서 좀더 다양한 일들을 하기 위해 블록을 지정해서 코드를 작성할 수 있으며,
// 블록을 사용할 경우 return을 이용해서 값을 꼭 return해주어야한다!
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 바로 호출!
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 1, 2));
