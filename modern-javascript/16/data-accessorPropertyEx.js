// 접근자 프로퍼티와 데이터 프로퍼티 구별 방법

// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () {}, 'prototype');
// {value: {…}, writable: true, enumerable: false, configurable: false}