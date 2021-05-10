var foo = 'keem';

foo = null;
// 이전 참조 'keem'을 제거. foo변수는 더 이상 'keem'을 참조하지 않는다.
//유용해 보이지 않는 코드이며, 변수의 스코프를 좁게 만들어 변수 자체를 빨리 소멸시키는 것이 좋다.

console.log(foo);