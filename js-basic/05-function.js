// 05: 함수
// 학습 목표: 함수 정의와 호출, 매개변수와 반환값 활용, 다양한 함수 패턴 익히기
// 개념:
// 1. 함수란? 특정 작업을 수행하는 코드 블록. 필요할 때 호출하여 사용.
//    - 가독성과 재사용성 향상, 중복 로직 제거가 목적.
// 2. 함수 정의 방법
//    - 함수 선언식: function 키워드와 이름으로 선언, 호이스팅됨
//    - 함수 표현식: 함수를 변수에 할당, 익명/이름 지정 가능
//    - 화살표 함수(ES6): 함수 표현식의 간결 버전, this 바인딩 방식 다름
// 3. 매개변수(Parameters): 호출 시 값을 전달받는 변수
//    - 인자(Arguments): 함수를 호출하며 전달하는 실제 값
// 4. 반환값(Return): 함수 내에서 값을 반환할 때 return 사용

// 1. 함수 선언식
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("이지연")); // Hello, 이지연!

// 2. 함수 표현식 (익명 함수)
const add = function (a, b) {
  return a + b;
};
console.log(`add(2, 3): ${add(2, 3)}`); // 5

// 함수 표현식 (이름 있는 함수)
const sub = function subFunc(a, b) {
  return a - b;
};
console.log(`sub(7, 2): ${sub(7, 2)}`);

// 3. 화살표 함수 (ES6+)
const multiply = (a, b) => a * b;
console.log(`multiply(4, 5): ${multiply(4, 5)}`);

// 4. 매개변수 기본값
function pow(x, y = 2) {
  return x ** y;
}
console.log(`pow(3): ${pow(3)}`); // 9
console.log(`pow(3, 3): ${pow(3, 3)}`); // 27

// 5. 함수 내부에서 값 반환(return)
function getMessage(isStudent) {
  if (isStudent) return "학생입니다.";
  return "학생이 아닙니다.";
}
console.log(getMessage(true));

// 6. 한 번만 실행되는 즉시실행함수(IIFE)
(function (msg) {
  console.log(`즉시실행함수: ${msg}`);
})("Hello, IIFE!");

// 7. 배열/객체 함수 활용 예시
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // map은 배열의 각 요소에 함수를 적용시켜 새 배열로 반환
console.log("배열 2배:", doubled);

const person = {
  name: "이지연",
  greet: function () {
    return `안녕하세요, ${this.name}!`;
  },
};
console.log(person.greet());

// 8. 콜백 함수 예시 (함수를 인자로 전달)
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}
repeat(3, (idx) => console.log(`repeat 콜백: ${idx}`));

// 9. 함수 자료형 및 동적 할당
console.log(typeof greet); // "function"
const funcArr = [greet, add, multiply];
console.log(funcArr[0]("JiYeon")); // "Hello, JiYeon!"

// 10. 함수도 객체처럼 속성을 가질 수 있음
greet.description = "이름을 받아 인사하는 함수";
console.log(greet.description);
