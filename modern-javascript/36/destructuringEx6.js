const todos = [
    {id: 1, content: 'HTML', completed: true},
    {id: 2, content: 'CSS', completed: false},
    {id: 3, content: 'SASS', completed: false}
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, ,{id}] = todos;
console.log(id); // 3



// 중첩 예제
const user = {
    name: 'Keem',
    address: {
        zipCode: '03068',
        city: 'Ansan'
    }
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const {address: {city}} = user;
console.log(city); // Ansan


// Rest 프로퍼티
const {x, ...rest} = {x: 1, y: 2, z: 3};
console.log(x, rest); // 1 { y: 2, z: 3 }