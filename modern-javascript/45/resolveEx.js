// 배열을 resolve하는 프로미스를 생성
const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log); // [1, 2, 3]

// 위 코드와 동일하다
const resolvePromise2 = new Promise((resolve) => resolve([1, 2, 3]));
resolvePromise2.then(console.log);
