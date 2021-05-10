// String.prototype.indexOf
const str = 'Hello world';
// 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('l')); // 2
// 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('or')); // 7
// 문자열 str에서 'x'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('x')); // -1
// 2번째 인수로 시작할 인덱스를 지정
// 문자열 str의 인덱스 3부터 'l'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('l', 3)); // 3
// 특정 문자열에 특정 문자열이 존재하는지 확인할때 유용하다 
if (str.indexOf('Hello') !== -1) {
    // 문자열 str에 'hello'가 포함되어 있는 경우 처리할 내용
    console.log('있지롱');
}
// ES6 includes 메서드를 쓰면 가독성이 좋다.
if (str.includes('Hello')){
    // 문자열 str에 'hello'가 포함되어 있으면 true를 반환
    console.log('이게 더 가독성 있지롱');
}



// String.prototype.search
// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
console.log(str.search(/o/)); // 4
console.log(str.search(/w/)); // 6
console.log(str.search(/z/)); // -1



// String.prototype.includes
// 문자열이 포함되어 있는지 확인하여 불리언 타입으로 반환
console.log(str.includes('e')); // true
console.log(str.includes('world')); // true
console.log(str.includes('')); // true
console.log(str.includes()); // false
console.log(str.includes('z')); // false
// 2번째 인수로 시작할 인덱스를 지정
// 문자열 str의 인덱스 3부터 'l'이 포함되어 있는지 확인
console.log(str.includes('l', 3)); // true
console.log(str.includes('H', 3)); // false



// String.prototype.starsWith
// 문자열 str이 'He'로 시작하는지 확인
console.log(str.startsWith('He')); // true
console.log(str.startsWith('x')); // false
// 2번째 인수로 시작할 인덱스를 지정
// 문자열 str의 인덱스 5부터 시작하는 문자열이 ''로 시작하는지 확인
console.log(str.startsWith('', 5)); // true



// String.prototype.endsWith
// 문자열 str이 'ld'로 끝나는지 확인
console.log(str.endsWith('ld')); // true
console.log(str.endsWith('x')); // false
// 문자열 str의 처음부터 5자리까지('Hello')가 'lo'로 끝나는지 확인
console.log(str.endsWith('lo', 5)) // true



// String.prototype.chatAt
const str2 = 'Hello';
for (let i = 0; i < str2.length; i++) {
    console.log(str2.charAt(i)); // H e l l o
}
// 인덱스가 문자열의 범위(0 ~ str.length-1)를 벗어난 경우 빈 문자열을 반환한다.
console.log(str2.charAt(5)); // ''



// String.prototype.substring
// 인덱스 1부터 인덱스 4이전까지의 부분 문자열을 반환한다.
console.log(str.substring(1, 4)); // ell
// 인덱스 1부터 마지막 문자까지 부분 문자열을 반환한다.
console.log(str.substring(1)); // ell world
// 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
console.log(str.substring(4, 1));
// 인수 < 0 또는 NaN인 경우 0으로 취급
console.log(str.substring(-1)); // Hello world
// 인수 > 문자열의 길이인 경우 인수는 문자열의 길이로 취급된다.
console.log(str.substring(1, 100)); // ello world
console.log(str.substring(100)); // ''
// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
console.log(str.substring(0, str.indexOf(' '))); // Hello
// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // world



// String.prototype.slice
// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내서 반환
console.log(str.substring(0, 5)); // Hello
console.log(str.slice(0, 5)); // Hello
// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
console.log(str.substring(2)); // llo world
console.log(str.slice(2)); // llo world
// 인수 < 0 또는 NaN인 경우 0으로 취급
console.log(str.substring(-5)); // Hello world
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
console.log(str.slice(-5)); // world



// String.prototype.toUpperCase
console.log(str.toUpperCase()); // HELLO WORLD



// String.prototype.toLowerCase
console.log(str.toLowerCase()); // hello world



// String.prototype.trim
const str3 = '   foo   ';
console.log(str3.trim()); // 'foo'
// trimStart
console.log(str3.trimStart()); // 'foo   '
// trimEnd
console.log(str3.trimEnd()); // '   foo'
// replace 메서드에 정규 표현식을 사용해서 공백제거
console.log(str3.replace(/\s/g, '')); // foo
console.log(str3.replace(/^\s+/g, ''));// 'foo   '
console.log(str3.replace(/\s+$/g, '')); // '   foo'



// String.prototype.repeat
const str4 = 'abc';
console.log(str4.repeat()); // ''
console.log(str4.repeat(0)); // ''
console.log(str4.repeat(1)); // 'abc'
console.log(str4.repeat(2)); // 'abcabc'
console.log(str4.repeat(2.5)); // 'abcabc'
//console.log(str4.repeat(-1)); // RangeError: Invalid count value



// String.prototype.replace
// str에서 첫 번째 인수 'worl'를 검색하여 두 번째 인수 'Keem'으로 치환한다.
console.log(str.replace('world', 'Keem')); // Hello Keem
const str5 = 'Hello world world';
console.log(str5.replace('world', 'Keem')); // Hello Keem world
// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
console.log(str.replace('world', '<strong>$&</strong>')); // Hello <strong>world</strong>
// 정규 표현식 방법
const str6 = 'Hello Hello';
// 'hello'를 대소문자를 구별하지 않고 전역으로 검색한다.
console.log(str6.replace(/hello/gi, 'Keem')); // Keem Keem

// replace 예제
// 카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
    // /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치한다.
    // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
    return camelCase.replace(/.[A-Z]/g, match => {
        console.log(match);
        return match[0] + '_' + match[1].toLowerCase();
    });
}
const camelCase = 'helloWorld';
console.log(camelToSnake(camelCase)); // hello_world

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
    // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치한다.
    // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
    return snakeCase.replace(/_[a-z]/g, match => {
        return match[1].toUpperCase();
    });
}

const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase)); // helloWorld



// String.prototype.split
const str7 = 'How are you doing?';
// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
console.log(str7.split(' ')); // [ 'How', 'are', 'you', 'doing?' ]
// \s는 여러가지 공백 문자(스페이스, 탭 등)를 의미한다. 
console.log(str7.split(/\s/)); // [ 'How', 'are', 'you', 'doing?' ]
// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
console.log(str7.split('')); // ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?"]
// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
console.log(str7.split()); // [ 'How are you doing?' ]
// 공백으로 구분하여 배열로 반환한다. 단, 배열의 길이는 3이다.
console.log(str7.split(' ', 3)); // [ 'How', 'are', 'you' ]
// split + reverse + join
// 인수로 전달받은 문자열을 역순으로 뒤집는다.
function reverseString(str) {
    return str.split('').reverse().join('');    
}
console.log(reverseString('Hello world!')); // !dlrow olleH