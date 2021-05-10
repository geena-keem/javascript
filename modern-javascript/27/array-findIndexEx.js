const users = [
    { id: 1, name: 'Keem' },
    { id: 2, name: 'Lee' },
    { id: 2, name: 'gee' },
    { id: 3, name: 'na' }
];

// id가 2인 요소의 인덱스를 구한다.
console.log(users.findIndex(user => user.id === 2)); // 1

// name이 'na'인 요소의 인덱스를 구한다.
console.log(users.findIndex(user => user.name === 'na')); // 3

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화할 수 있다.
function predicate(key, value) {
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

// id가 2인 요소의 인덱스를 구한다.
console.log(users.findIndex(predicate('id', 2))); // 1

// name이 'na'인 요소의 인덱스를 구한다.
console.log(users.findIndex(predicate('name', 'na'))); // 3