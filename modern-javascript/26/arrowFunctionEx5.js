const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
//new Foo(); // TypeError: Foo is not a constructor

// 화살표 함수는 prototype 프로퍼티가 없다.
console.log(Foo.hasOwnProperty('prototype')); // false