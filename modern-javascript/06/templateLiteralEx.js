// 템플릿 리터럴
var template = `Template literal`;
console.log(template);

// 멀티라인 문자열 (작은따음표를 사용할 경우 이스케이프 시퀀스를 이용해 줄바꿈!)
var template = '<ul>\n\t<li><a href = "#">Home</a></li>\n</ul>';
console.log(template);

// 멀티라인 문자열 (백틱을 사용할 경우 템플릿 리터널 내에서는 이스케이프 시퀀스를 사용하지 않아도 자동 줄바꿈이 가능!)
var template = `<ul>
    <li><a href = "#">Home</a><li>
</ul>`;
console.log(template);


// 표현식 삽입 (ES5)
var first = 'gee-na';
var last = 'keem';

console.log('My name is ' + first + ' ' + last + '.');

// 표현식 삽입 (ES6)
var first = 'gee-na';
var last = 'keem';

console.log(`My name is ${first} ${last}.`);

// ex1
console.log(`1 + 2 = ${1+2}`); //백틱을 사용해서 표현식 삽입은 정상적으로 값을 추출

// ex2
console.log('1 + 2 = ${1+2}'); //일반 문자열로에서 ${} 표현식 삽입은 문자열로 취급되서 값 추출 X