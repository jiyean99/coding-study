// 03: 조건문
// 학습 목표: if-else, switch문 사용법 이해, 조건에 따른 분기 처리
// 개념:
// 1. if-else 조건문: true/false에 따라 코드 실행
// 2. switch: 여러 값 중 일치하는 case 실행, default 처리 가능

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
