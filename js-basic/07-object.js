// 07: 객체
// 학습 목표: 객체 선언, 속성 및 메서드 추가/수정/삭제, 주요 사용 패턴 익히기
// 개념:
// 1. 객체란? 키(key)-값(value) 쌍의 집합. 다양한 데이터와 동작을 한 번에 저장/조작.
// 2. 접근 방법: 점(.) 또는 대괄호([]) 표기
// 3. 속성(Property): 데이터를 의미, 메서드(Method): 객체의 함수형 속성

// 객체 선언 및 초기화
let person = {
  name: "이지연",
  age: 28,
  isStudent: true,
};

// 객체 정보 확인 함수
const logObj = (objName, objValue) => {
  console.log(`객체 ${objName} ===`, objValue);
};

// 선언 직후 객체 확인
logObj("person", person); // {name: "이지연", age: 28, isStudent: true}

// 속성 접근/수정/추가
console.log(`person.name: ${person.name}`); // 이지연
person.age = 29; // 수정
person["job"] = "개발자"; // 추가
logObj("수정/추가된 person", person); // age: 29, job: 개발자 추가됨

// 속성 삭제
delete person.isStudent;
logObj("isStudent 삭제 후", person);

// 메서드(객체의 함수형 속성) 추가
person.greet = function () {
  return `안녕하세요, 저는 ${this.name}입니다.`;
};
console.log(person.greet()); // 메서드 호출 예시

// 객체 순회(모든 키/값 출력)
console.log("=== 모든 속성 출력 ===");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 객체 내 객체(중첩 객체)
person.address = {
  city: "서울",
  zipcode: "01234",
};
console.log(
  `도시: ${person.address.city}, 우편번호: ${person.address.zipcode}`
);

// 객체 구조 분해 할당
const { name, age } = person;
console.log(`구조분해: ${name}, ${age}`);

// 배열과의 차이 확인
let arr = [10, 20, 30];
console.log("arr[0]:", arr[0]); // 인덱스로 접근
console.log("person.name:", person.name); // 키로 접근

// 객체 배열 활용
const users = [
  { name: "김땡땡", age: 26 },
  { name: "이땡땡", age: 31 },
];
users.forEach((u) => logObj("user", u));

// 동적 속성명 할당 예시
const keyName = "hobby";
person[keyName] = "자전거";
console.log("동적 키 속성 추가:", person);

// 객체는 함수/배열 등 다양한 값 저장 가능
person.skills = ["JS", "React"];
person.sayHello = () => "Hello!";
console.log(person.skills);
console.log(person.sayHello());
