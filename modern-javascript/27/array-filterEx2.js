class Users {
    constructor() {
        this.users = [
            {id: 1, name: 'Keem'},
            {id: 2, name: 'Lee'}
        ];
    }

    // 요소 추출
    findById(id) {
        // id가 일치하는 사용자만 반환한다.
        return this.users.filter(user => user.id === id);
    }

    // 요소 제거
    remove(id) {
        // id가 일치하지 않는 사용자는 제거한다.
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new Users();

let user = users.findById(1);
console.log(user); // [ { id: 1, name: 'Keem' } ]

users.remove(1);

user = users.findById(1);
console.log(user); // []