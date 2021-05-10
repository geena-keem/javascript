const promisGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위한 reject 함수를 호출한다.
        reject(new Error(xhr.status));
      }
    };
  });
};

const url = 'https://jsonplaceholder.typicode.com';

(async () => {
  // id가 1인 post의 userId를 취득
  const { userId } = await promisGet(`${url}/posts/1`);

  // 취득한 post의 userId로 user 정보를 취득
  const userInfo = await promisGet(`${url}/users/${userId}`);

  console.log(userInfo);
})();
