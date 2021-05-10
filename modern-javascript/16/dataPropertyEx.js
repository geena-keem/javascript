const person = {
    name: 'Keem'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Keem', writable: true, enumerable: true, configurable: true }




// 위코드에 프로퍼티를 동적으로 생성 (마찬가지로 value값으로 초기화, 나머지 true로 초기화)

const person2 = {
    name: 'Keem'
};

person2.age = 29;

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptors(person2));

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