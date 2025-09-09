// 06: 배열
// 학습 목표: 배열 선언, 요소 추가/삭제/변경, 주요 메서드 활용, 배열 확인 실습
// 개념:
// 1. 배열이란? 여러 값을 순차적으로 저장, 인덱스로 접근하는 자료구조
// 2. 주요 메서드: push, pop, unshift, shift, forEach, map, filter, find, includes, reduce 등

// 배열 선언 예시
let fruits = ["사과", "바나나", "오렌지"];
const numbers = [1, 2, 3, 4];
let mixed = [true, 7, "hi"];

// 배열 요소 및 타입 확인 함수
const logArr = (arrName, arrValue) => {
  console.log(`배열 ${arrName} (${typeof arrValue}): [${arrValue}]`);
};

// 배열 선언 및 초기값 출력
logArr("fruits", fruits); // 배열 fruits (object): [사과,바나나,오렌지]
logArr("numbers", numbers); // 배열 numbers (object): [1,2,3,4]
logArr("mixed", mixed); // 배열 mixed (object): [true,7,hi]

// 요소 접근/변경
console.log(`fruits[1]: ${fruits[1]}`); // 바나나
fruits[1] = "포도";
logArr("fruits", fruits); // [사과,포도,오렌지]

// 요소 추가/삭제
fruits.push("키위");
logArr("fruits", fruits); // [사과,포도,오렌지,키위]
fruits.pop();
logArr("fruits", fruits); // [사과,포도,오렌지]
fruits.unshift("레몬");
logArr("fruits", fruits); // [레몬,사과,포도,오렌지]
fruits.shift();
logArr("fruits", fruits); // [사과,포도,오렌지]

// 반복/변형 메서드 실습
numbers.forEach((num, i) => console.log(`numbers[${i}] * 2 = ${num * 2}`));

const even = numbers.filter((n) => n % 2 === 0);
logArr("even", even); // [2,4]

const squared = numbers.map((n) => n ** 2);
logArr("squared", squared); // [1,4,9,16]

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(`numbers 합계: ${sum}`); // 10

// 탐색/조건 메서드
console.log(`numbers에 3 포함?: ${numbers.includes(3)}`); // true
console.log(`모든 요소 > 0?: ${numbers.every((n) => n > 0)}`); // true
console.log(`어떤 요소 < 0?: ${numbers.some((n) => n < 0)}`); // false

// find/findIndex
const firstOver2 = numbers.find((n) => n > 2);
const firstOver2Idx = numbers.findIndex((n) => n > 2);
console.log(`2보다 큰 첫 값: ${firstOver2}, 인덱스: ${firstOver2Idx}`);

// 객체 배열 활용
const users = [
  { name: "이지연", age: 28 },
  { name: "홍길동", age: 35 },
];
const names = users.map((u) => u.name);
logArr("names", names); // [이지연,홍길동]

// 배열 구조 분해 할당
const [a, b] = numbers;
console.log(`numbers 구조 분해: ${a}, ${b}`);

// 배열에 함수/객체도 포함 가능
const special = [() => "함수!", { x: 1 }];
console.log(`special[0]() 실행: ${special[0]()}`); // 함수!
