// 1. 식별자 str은 문자열을 값으로 가지고 있다
const str = 'hello';

// 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가르킨다.
//    식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
//    래퍼 객체에 name 프로퍼티가 동적 추가된다.
str.name = 'Keem';

// 3. 식별자는 str은 다시 원래의 문자열. 즉, 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
//    이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가르킨다.
//    새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name); // undefinde

// 5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
//    이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가바지 컬렉션의 대상이 된다.
console.log(typeof str, str);