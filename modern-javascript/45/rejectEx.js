// 에러 객체를 reject하는 프로미스를 생성
const rejectPromise = Promise.reject(new Error('Error!'));
rejectPromise.catch(console.log); // Error: Error!

// 위 코드와 동일하다.
const rejectPromise2 = new Promise((_, reject) => reject(new Error('Error!')));
resolvePromise2.catch(console.log); // Error: Error!
