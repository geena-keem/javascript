const request = {
  get(url) {
    return fetch(url);
  },
  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },
  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },
  delete(url) {
    return fetch(url, { method: 'DELETE' });
  },
};

// GET 요청
request
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: false}

// POST 요청
request
  .post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: 'JavaScript',
    completed: false,
  })
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
// {userId: 1, title: "JavaScript", completed: false, id: 201}

// PATCH 요청
request
  .patch('https://jsonplaceholder.typicode.com/todos/1', {
    completed: true,
  })
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: true}

// DELETE 요청
request
  .delete('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => console.log(response))
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
// {}
