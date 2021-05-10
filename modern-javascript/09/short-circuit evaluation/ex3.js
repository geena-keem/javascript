// 단축 평가를 유용하게 쓸 수 있는 상황
// 1. 객체가 가리키키기를 기대하는 변수가 null or undefined가 아닌지 확인하고 프로퍼티를 참조할때
// var elem = null;
// var value = elem.value; // TypeError: Cannot read property 'value' of null

var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null

console.log(value);



// 2. 함수 매개변수에 기본값을 설정할때
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('Hi'));

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('Hi'));