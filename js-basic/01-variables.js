// 01: 변수와 자료형
// 학습 목표: 변수와 상수의 선언 방법, 자료형 확인, 값 변경 연습
// 개념:
// 1. 변수(var, let)과 상수(const)의 차이
//    - var: 함수 스코프, 재선언 가능 (예전 방식)
//    - let: 블록 스코프, 재선언 불가
//    - const: 블록 스코프, 재할당 불가
// 2. 자료형(Type)
//    - string, number, boolean, undefined, null, object 등
// 3. typeof 연산자를 통해 변수의 자료형 확인 가능

let name = "이지연";
const age = 27;
let isStudent = true;

// 각 변수, 상수별 자료형 및 값 확인용 함수
const logVar = (varName, value) => {
  console.log(`변수 ${varName} 타입 === ${typeof value}, 값 === ${value}`);
};

logVar("name", name);
logVar("age", age);
logVar("isStudent", isStudent);

// 값 변경 후
name = "LEE JI YEAN";
console.log(`\n변경 후 name: ${name}`);
