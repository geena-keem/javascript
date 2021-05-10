function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    // try / catch 구문을 사용하여 에러를 처리한다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

runTasks();
