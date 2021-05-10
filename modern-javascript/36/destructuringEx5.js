const {firstName = 'gee-na', lastName} = {lastName: 'Keem'};
console.log(firstName, lastName); // gee-na Keem

const {firstName: fn = 'gee-na', lastName: ln} = {lastName: 'Keem'};
console.log(fn, ln); // gee-na Keem



const str = 'HELLO';
// String 래퍼 객체로부터 length 프로퍼티만 추출한다.
const {length} = str;
console.log(length); // 5


const todo = {id: 1, content: 'HTML', completed: true};
// todo 객체로부터 id 프로퍼티만 추출한다.
const {id} = todo;
console.log(id); // 1



function printTodo(todo) {
    console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}
printTodo({id: 1, content: 'HTML', completed: true});

// 위 예제를 디스트럭처링 할당을 사용하여 간단하게 표현
function printTodo2({content, completed}) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}
printTodo2({id: 1, content: 'CSS', completed: true});
