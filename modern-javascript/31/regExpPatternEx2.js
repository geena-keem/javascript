const target = 'A AA B BB Aa Bb';

// 'A' 또는 'B'를 전역 검색한다.
const regExp = /A|B/g;
console.log(target.match(regExp));
// ["A", "A", "A", "B", "B", "B", "A", "B"]


// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ...또는 'B', 'BB', 'BBB',...
const regExp2 = /A+|B+/g;
console.log(target.match(regExp2));
// [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]


// 위 코드를 더 간단히
// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ...또는 'B', 'BB', 'BBB',...
const regExp3 = /[AB]+/g;
console.log(target.match(regExp3));
// [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]



const target2 = 'A AA BB ZZ Aa Bb';

// 'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ...또는 'B', 'BB', 'BBB',...또는 'Z', 'ZZ', 'ZZZ',...
const regExp4 = /[A-Z]+/g;
console.log(target2.match(regExp4));
// [ 'A', 'AA', 'BB', 'ZZ', 'A', 'B' ]



const target3 = 'AA BB Aa Bb 12';
// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp5 = /[A-Za-z]+/g;
console.log(target3.match(regExp5));
// [ 'AA', 'BB', 'Aa', 'Bb' ]



const target4 = 'AA BB 12,345';
// '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp6 = /[0-9]+/g;
console.log(target4.match(regExp6));
// [ '12', '345' ]

// 쉼표를 포함시키면 매칭 결과가 분리되지않는다.
const regExp7 = /[0-9,]+/g;
console.log(target4.match(regExp7));
// [ '12,345' ]


// 위 예제를 간단히 표현 
// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp8 = /[\d,]+/g;
console.log(target4.match(regExp8));
// [ '12,345' ]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp8 = /[\D,]+/g;
console.log(target4.match(regExp8));
// [ 'AA BB ', ',' ]



const target5 = 'Aa Bb 12,345 _$%&';

// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp9 = /[\w,]+/g;
console.log(target5.match(regExp9));
// [ 'Aa', 'Bb', '12,345', '_' ]

// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp9 = /[\W,]+/g;
console.log(target5.match(regExp9));
// [ ' ', ' ', ',', ' ', '$%&' ]



const target6 = 'AA BB 12 Aa Bb';

// 숫자를 제외한 문자열을 전역 검색한다.
const regExp10 = /[^0-9,]+/g;
console.log(target6.match(regExp10));
// [ 'AA BB ', ' Aa Bb' ]



const target7 = 'https://poiemaweb.com';

// 'https'로 시작하는지 검사한다.
const regExp11 = /^https/;
console.log(regExp11.test(target7)); // true

// 'com'으로 끝나는지 검사한다.
const regExp12 = /com$/;
console.log(regExp12.test(target7)); // true
