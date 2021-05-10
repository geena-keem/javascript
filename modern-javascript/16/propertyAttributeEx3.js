const person = {
    name: 'Keem'
};

// 프로퍼티 동적 생성
person.age = 29;

console.log(Object.getOwnPropertyDescriptors(person));

/*
{
    name: {
      value: 'Keem',
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: { value: 29, writable: true, enumerable: true, configurable: true }
}
*/