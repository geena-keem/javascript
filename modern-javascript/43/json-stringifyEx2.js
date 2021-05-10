const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'SASS', completed: true },
];

// 배열을 JSON 포맷의 문자열로 반환한다.
const json = JSON.stringify(todos, null, 2);
console.log(typeof json, json);
/*
    string [
      {
        "id": 1,
        "content": "HTML",
        "completed": false
      },
      {
        "id": 2,
        "content": "CSS",
        "completed": true
      },
      {
        "id": 3,
        "content": "SASS",
        "completed": true
      }
    ]
*/