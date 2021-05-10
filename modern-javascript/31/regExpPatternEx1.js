// 임의의 문자열 검색
const target = 'Is this all there is?';
// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;

console.log(target.match(regExp));
// ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]



// 반복 검색
const target2 = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp2 = /A{1,2}/g;
console.log(target2.match(regExp2));
// [ 'A', 'AA', 'A', 'AA', 'A' ]


// 'A'가 2번 반복되는 문자열을 전역 검색한다.
const regExp3 = /A{2}/g;
console.log(target2.match(regExp3));
// [ 'AA', 'AA' ]


// 'A'가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp4 = /A{2,}/g;
console.log(target2.match(regExp4));
// [ 'AA', 'AAA' ]


// 'A'가 최소 한 번 이상 반복되는 문자열 ('A', 'AA', 'AAA', ...)을 전역 검색한다.
const regExp5 = /A+/g;
console.log(target2.match(regExp5));
// [ 'A', 'AA', 'A', 'AAA' ]


const target3 = 'color colour';
// 'colo' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고 'r'이 이어지는
// 문자열 'color', 'colour'을 전역 검색한다.
const regExp6 = /colou?r/g;
console.log(target3.match(regExp6));
// [ 'color', 'colour' ]