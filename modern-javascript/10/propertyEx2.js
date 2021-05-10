// 1
var person = {
    name: 'keem'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name);

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']);



// 2
var person = {
    name: 'keem'
};

//console.log(person.age); // undefined, 마침표 표기법으로 사용했을 경우 오류가 확인이 안된다.
//console.log(person[age]); // 대괄호 표기법으로 사용했을 경우 오류가 확인된다.



// 3
var person = {
    'last-name': 'keem!',
    1: 10
};

//console.log(person.'last-name'); // SyntaxError: Unexpected string 오류!
//console.log(person.last-name); //  Node.js 환경: ReferenceError: name is not defined 오류!
                               // 브라우저 환경: NaN
//console.log(person[last-name]); // ReferenceError: last is not defined 오류!
console.log(person['last-name']); // 'keem!'

// 프로퍼티 키가 숫자로이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
//console.log(person.1); // 오류!
//console.log(person.'1'); // SyntaxError: Unexpected string 오류!
console.log(person[1]); // 10
console.log(person['1']); // 10