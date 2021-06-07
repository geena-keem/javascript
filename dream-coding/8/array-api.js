// Q1. make a string out of an array
{
  // join(): 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
  // join(separator?: string): string;
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); // apple,banana,orange
  console.log(result);
  //   const result2 = fruits.join(''); // applebananaorange
  //   console.log(result2);
  //   const result3 = fruits.join('+'); // apple+banana+orange
  //   console.log(result3);
}

// Q2. make an array out of a string
{
  // split(): 문자열을 분할한다.
  // split(separator: string | RegExp, limit?: number): string[];
  // limit: return 받을 배열 길이를 지정할 수 있다.
  // separator를 전달하지 않으면 문자열 전체가 배열 한 곳에 들어가므로 구분자를 꼭 전달해야 한다!
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // ["🍎", " 🥝", " 🍌", " 🍒"]
  // const result2 = fruits.split(',', 2); // ["🍎", " 🥝"]
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // reverse(): 배열의 순서를 반전한다. (배열의 원본이 변경된다.)
  // reverse(): T[];
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체도 순서가 바뀐다.
}

// Q4. make new array without the first two elements
{
  // splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
  // array 자체가 변경된다.
  // splice(start[, deleteCount[, item1[, item2[, ...]]]])
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2); // 인덱스 0부터 2개를 삭제
  console.log(`splice: ${result}`); // 삭제 된 [1, 2]
  console.log(`splice: ${array}`); // [1, 2]가 삭제 된 [3, 4, 5]

  // slice(): 얕은 복사본으로 새로운 배열 객체를 반환한다. (원본 배열이 변경되지 않는다.)
  // slice(start?: number, end?: number): T[];
  // => 0부터 2까지라고 가정했을 때 마자막 2는 배제되어 0과 1까지만 전달이 된다.
  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(`slice: ${result2}`);
  console.log(`slice: ${array2}`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find(): 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 없으면 undefined를 반환한다.
  // find(callback[, thisArg])
  const result = students.find(
    (student) =>
      // console.log(student, index);
      student.score === 90,
  );
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter(): 주어진 함수의 해당되는 모든 요소를 모아 새로운 배열로 반환한다.
  // filter(callback(element[, index[, array]])[, thisArg])
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
{
  // result should be: [45, 80, 90, 66, 88]
  // map(): 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
  // map(callback(currentValue[, index[, array]])[, thisArg])
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some(): 배열의 각 엘리먼트가 판별 함수를 통해 반환 값이 하나라도 true가 있는지 확인한다.
  //         하나라도 true이면 true를 반환하고 모두 false인 경우에만 false를 반환한다. (기존 배열은 변경되지 않는다.)
  //         every는 and 조건이라면 some은 or 조건이다.
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  // every(): 배열의 각 엘리먼트가 판별 함수를 통해 반환값이 모두 true인지 확인한다.
  //          모든 case가 true일 때 true를 반환하고 하나라도 false이면 반환값은 false이다. (기존 배려은 변경되지 않는다.)
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce(): 배열 각 요소에 대하여 reducer함수를 실행하고 배열이 아닌 하나의 결괏값을 반환한다. (누적값을 사용)
  // prev값은 이전에 콜백함수에서 return된 값이 전달되어 오고  curr값은 배열의 item을 순차적으로 전달 받는다.
  const result = students.reduce(
    (prev, curr) =>
      // console.log('-------');
      // console.log(prev);
      // console.log(curr);
      prev + curr.score,
    0,
  );
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort(): 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
  //         -값을 return하면 첫 번째가 뒤에 것보다 작다고 간주되어 정렬이 된다.
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 오름차순
    // .sort((a,b) => b-a) // 내림차순
    .join();
  console.log(result);
}
