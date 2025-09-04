## 01: 변수와 자료형

### 학습 목표

- 변수와 상수 선언, 자료형 확인, 값 변경 연습

### 개념 & 문법

- **var:** 함수 스코프, 재선언/재할당 가능 (ES5 이하, 사용 지양)
- **let:** 블록 스코프, 재선언 불가, 재할당 가능 (현재 권장)
- **const:** 블록 스코프, 재선언 불가, 재할당 불가 (상수, 객체/배열 내부 값은 수정 가능)
- **자료형(Type):** string, number, boolean, undefined, null, object 등

```js
let name = "이지연";
const age = 27;
let isStudent = true;

// typeof로 자료형 체크
const logVar = (varName, value) => {
  console.log(`변수 ${varName} 타입 === ${typeof value}, 값 === ${value}`);
};

logVar("name", name);
logVar("age", age);
logVar("isStudent", isStudent);

name = "LEE JI YEAN";
console.log(`\n변경 후 name: ${name}`);
```

**Tip:**

- 기본적으로 `const`를 사용하고, 변할 필요가 있을 때만 `let` 사용합니다.
- 객체/배열 수정 필요시에도 `const`로 선언하고 내부 데이터만 변경.

---

## 02: 연산자와 문자열

### 학습 목표

- 산술/문자열 연산 이해, 템플릿 리터럴(백틱 `${}`) 활용

### 개념 & 문법

- **산술 연산자:** `+`, `-`, `*`, `/`, `%`
- **문자열 연산:** `+`로 문자열 연결, 템플릿 리터럴(`)로 값/연산 삽입

```js
let a = 10,
  b = 3;
console.log(`덧셈: ${a} + ${b} = ${a + b}`);
console.log(`곱셈: ${a} * ${b} = ${a * b}`);
console.log(`나머지: ${a} % ${b} = ${a % b}`);

let fullName = "Ji" + "Yeon";
console.log(`문자열(이름) 합치기: ${fullName}`);
```

---

## 03: 조건문

### 학습 목표

- 분기문(if-else, switch) 이해 및 구현법 체득

### 개념 & 문법

- **if-else:** 조건에 따라 서로 다른 로직 실행
- **switch:** 여러 값 중 하나 선택, `break`/`default`로 처리

```js
let score = 85;
if (score >= 90) console.log("학점: A");
else if (score >= 80) console.log("학점: B");
else console.log("학점: C");

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("과일: 사과 🍎");
    break;
  case "banana":
    console.log("과일: 바나나 🍌");
    break;
  default:
    console.log("과일: 알 수 없음");
}
```

---

## 04: 반복문

### 학습 목표

- 다양하고 실용적인 반복문 패턴 익히기, 배열/객체 순회 실습, break/continue 등 제어문 사용법

### 개념 & 문법

- **for:** 반복 횟수 지정 시 사용
- **while:** 조건이 true인 동안 반복
- **do-while:** 최소 1번은 실행 후 반복
- **forEach:** 배열의 각 요소를 콜백으로 반복
- **for...of:** 배열, 문자열 등 iterable 자료의 요소 값 직접 접근
- **for...in:** 객체, 배열의 key 인덱스 접근 (배열엔 권장X, 객체에만)

```js
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
```

---

# 05: 함수(Function)

## 학습 목표

- 함수 정의와 호출 방법 이해
- 매개변수와 반환값 활용법 익히기
- 다양한 함수 선언 방식 숙지 및 실습

## 함수란?

- 특정 작업을 수행하는 코드 블록
- 필요할 때 호출해 재사용 가능
- 가독성 향상과 중복 코드 제거 목적

## 함수 정의 방법

### 1. 함수 선언식 (Function Declaration)

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("이지연")); // Hello, 이지연!
```

- 선언 전에 호출 가능 (호이스팅)

### 2. 함수 표현식 (Function Expression)

```js
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```

- 변수에 함수를 할당
- 선언 전에 호출 불가

### 3. 화살표 함수 (Arrow Function, ES6+)

```js
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
```

- 간결한 함수 표현
- `this` 바인딩 방식이 다름

## 매개변수와 기본값

```js
function pow(x, y = 2) {
  return x ** y;
}
console.log(pow(3)); // 9
console.log(pow(3, 3)); // 27
```

## 반환값 (Return)

- 함수에서 값을 반환할 때 사용
- 반환하지 않으면 `undefined` 반환

## 즉시 실행 함수 (IIFE)

```js
(function (msg) {
  console.log(`즉시 실행 함수: ${msg}`);
})("Hello, IIFE!");
```

- 선언과 동시에 실행

## 함수도 객체다

- 함수는 일급 객체로 변수에 할당 가능
- 배열, 객체에 포함 가능
- 속성 추가 가능

## 고급 예제

### 콜백 함수

```js
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}
repeat(3, (idx) => console.log(`반복 콜백: ${idx}`));
```

### 메서드(객체 내부 함수)

```js
const person = {
  name: "이지연",
  greet() {
    return `안녕하세요, ${this.name}!`;
  },
};
console.log(person.greet());
```

---

## 참고 링크

- [MDN 공식 자바스크립트 문법 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [모던 JavaScript 튜토리얼](https://ko.javascript.info/)
