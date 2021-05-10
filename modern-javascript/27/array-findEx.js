const users = [
    { id: 1, name: 'Keem' },
    { id: 2, name: 'Lee' },
    { id: 2, name: 'gee' },
    { id: 3, name: 'na' }
];

// id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다.
console.log(users.find(user => user.id === 2)); // { id: 2, name: 'Lee' }


// filter는 배열을 반환
console.log([1, 2, 2, 3].filter(item => item === 2)); // [ 2, 2 ]

// find는 요소를 반환
console.log([1, 2, 2, 3].find(item => item === 2)); // 2