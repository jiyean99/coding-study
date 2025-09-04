// 04: 반복문
// 학습 목표: 반복문 종류/문법 익히기, 반복 제어, 배열/객체 순회
// 개념:
// 1. 반복문 종류
//    - for: 반복 횟수가 정해진 경우 (초기값, 조건식, 증감식)
//    - while: 조건이 true인 동안 반복
//    - do-while: 최소 한 번 실행 후 조건에 따라 반복
//    - forEach: 배열의 각 요소별 콜백 실행
//    - for...of: 배열, 문자열 등 iterable 자료 순회 (값 접근)
//    - for...in: 객체의 key 순회
//
// 2. 반복문 내 변수 값 변경, break/continue, 배열/객체 순회 연습

// log 함수: 변수명과 값 출력
const logVar = (varName, value) => {
  console.log(`${varName} 값 === ${value}`);
};

// for문: 1~5 출력
for (let i = 1; i <= 5; i++) {
  logVar("[for문] i", i);
}

// while문: 1~5 출력
let j = 1;
while (j <= 5) {
  logVar("[while문] j", j);
  j++;
}

// do-while문: 최소 1회 실행 후 조건 검사
let k = 1;
do {
  logVar("[do while문] k", k);
  k++;
} while (k <= 5);

// 배열 순회: forEach
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, idx) => {
  logVar(`fruits[${idx}]`, fruit);
});

// 배열 순회: for...of
for (const fruit of fruits) {
  logVar("fruit(for...of)", fruit);
}

// 객체 순회: for...in
const person = { name: "Alice", age: 30 };
for (const key in person) {
  logVar(`person.${key}`, person[key]);
}

// 반복문 값 변경 예시
let sum = 0;
for (let n = 1; n <= 5; n++) {
  sum += n;
  logVar("sum(누적)", sum);
}

// 반복 제어: break/continue
for (let x = 1; x <= 10; x++) {
  if (x % 2 === 0) continue; // 짝수 건너뜀
  if (x > 7) break; // 8 이상은 반복 종료
  logVar("x(홀수/7이하)", x);
}
