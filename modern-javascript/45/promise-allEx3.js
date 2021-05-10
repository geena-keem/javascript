Promise.all([
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error1')), 3000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error2')), 2000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error3')), 1000)
  ),
])
  .then(console.log)
  .catch(console.log); // Error: Error3
