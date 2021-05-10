var person = {
    // 프로퍼티 키는 name, 값은 'keem'
    name: 'keem',
    // 프로퍼티 키는 age, 값은 28
    age: 28
};

console.log(person); // { name: 'keem', age: 28 }


var person = {
    firstName: 'gee-na', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'keem'  // 식별자 네이밍 규칙을 준수하지 않은 프로퍼티 키
                         // 자바스크립트 엔진은 따옴표를 생략한 last-name을 
                         // -연산자가 있는 표현식으로 해석하기 때문에 따옴표를 붙여줘야한다.
};

console.log(person); // { firstName: 'gee-na', 'last-name': 'keem' }


var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';

// ES6: 계산된 프로퍼티 이름
// var obj = {[key]: 'world'};

console.log(obj); // { hello: 'world' }



// 키를 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로 문자열로 변환!
var foo = {
    0: 1,
    1: 2,
    2: 3
}

console.log(foo); // { '0': 1, '1': 2, '2': 3 }



// var, function 같은 예약어를 사용해도 에러가 발생하지 않지만 권장하지 않는다.
var foo = {
    var: '',
    function: ''
}

console.log(foo); // { var: '', function: '' }



// 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮기때문에 주의! (에러발생하지 않는다.)
var foo = {
    name: 'keem',
    name: 'gee-na'
}

console.log(foo); // { name: 'gee-na' }