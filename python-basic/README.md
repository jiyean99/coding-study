# 01: 변수와 자료형

## 학습 목표

- 변수 선언, 자료형 확인, 값 변경 연습

## 개념 & 문법

- 변수: 컴퓨터 메모리에 값을 저장하는 공간, 재할당 가능
- 주요 기본 자료형:
  - **str** : 문자열 (예: "이지연", 'hello')
  - **int** : 정수 (예: 27, -5, 0)
  - **float** : 실수 혹은 부동 소수점 숫자 (예: 3.14, -0.5)
  - **bool** : 불리언 값, 참(True) 또는 거짓(False)
  - **None** : 값이 없음을 나타내는 특별한 자료형
  - **list** : 여러 값을 순서대로 저장하는 가변 시퀀스형
  - **dict** : 키-값 쌍으로 데이터 저장하는 자료형 (사전형)

```py

name = "이지연"
age = 27
is_student = True

def log_var(var_name, value):
print(f"변수 {var_name}의 type === {type(value).**name**}, 값 === {value}")

log_var("name", name)
log_var("age", age)
log_var("is_student", is_student)

name = "LEE JI YEAN"
print(f"\n변경 후 name: {name}")

```

---

# 02: 산술 연산자와 문자열 연산

## 학습 목표

- 기본 산술 연산 및 문자열 연산, f-string 활용법 연습

## 개념 & 문법

- 산술 연산자: `+`, `-`, `*`, `/`, `%`, `//`(몫), `**`(거듭제곱)
- f-string: 파이썬 3.6 부터 사용 가능한 문자열 포매팅 방식. 문자열 앞에 `f` 붙이고 `{}` 안에 변수, 표현식 작성

```py

a = 10
b = 3

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} _ {b} = {a _ b}")
print(f"{a} / {b} = {a / b}")
print(f"{a} // {b} = {a // b} (몫)")
print(f"{a} % {b} = {a % b} (나머지)")
print(f"{a} ** {b} = {a ** b} (거듭제곱)")

str1 = "Hello"
str2 = "World"

print(str1 + " " + str2)
print(f"{str1} {str2}")
print(str1 _ 3)
print(f"{str1 _ 3}")
print(f"'{str1}' 문자열 길이: {len(str1)}")

```

---

# 03: 조건문

## 학습 목표

- 조건문의 기본 구조(if, if-else, if-elif-else) 이해 및 연습

## 개념 & 문법

- 조건문은 특정 조건이 참인지 검사하여 코드 흐름 제어
- 삼항 연산자로 간단한 조건부 표현 가능

```py

score = 85
if score >= 60:
print("합격입니다.")

score = 45
if score >= 60:
print("합격입니다.")
else:
print("불합격입니다.")

score = 75
if score >= 90:
print("A학점")
elif score >= 80:
print("B학점")
elif score >= 70:
print("C학점")
else:
print("F학점")

result = "합격" if score >= 60 else "불합격"
print(f"조건부 표현식 결과: {result}")

```

---

# 04: 반복문

## 학습 목표

- for, while 반복문 이해 및 조건과 제어문법 실습, 컬렉션 자료 순회

## 개념 & 문법

- 반복문 종류: for, while
- break, continue로 반복 흐름 제어
- 리스트, 문자열 등 반복 가능(iterable) 객체 순회

```py

def log_var(var_name, value):
print(f"변수 {var_name} 값 === {value}")

for i in range(1, 6):
log_var("i", i)

j = 1
while j <= 5:
log_var("j", j)
j += 1

for x in range(1, 11):
if x % 2 == 0:
continue
if x > 7:
break
log_var("x", x)

fruits = ['사과', '바나나', '체리']
for idx, fruit in enumerate(fruits):
log_var(f"fruits[{idx}]", fruit)

word = "Python"
for char in word:
log_var("char", char)

count = 0
while True:
count += 1
if count > 3:
break
log_var("count", count)

```

---

# 05: 함수

## 학습 목표

- 함수 선언, 호출, 매개변수와 반환값 이해, 함수 패턴 학습

## 개념 & 문법

- 함수는 코드 재사용을 위한 블록
- 기본 매개변수 지원, 반환값 지정 가능
- 람다 함수, 중첩함수, 익명함수 활용법

```py

def greet(name):
return f"안녕! 난 {name}!"

print(greet("이지연"))

def add(a, b):
return a + b

print(f"add(3, 5) = {add(3, 5)}")

def power(base, exponent=2):
return base ** exponent

print(power(4))
print(power(2, 3))

def print_message(message):
print(f"메시지: {message}")

print_message("함수 학습 중!")

def outer():
def inner():
return "내부 함수 결과"
return f"외부 함수에서 받은: {inner()}"

print(outer())

square = lambda x: x * x
print(f"square(6) = {square(6)}")

def multiply(x, y):
return x * y

func = multiply
print(f"func(4, 5) = {func(4, 5)}")

def append_to(element, to=[]):
to.append(element)
return to

print(append_to(1))
print(append_to(2))

def append_to_fixed(element, to=None):
if to is None:
to = []
to.append(element)
return to

print(append_to_fixed(1))
print(append_to_fixed(2))

```

---

# 06: 리스트(List)

## 학습 목표

- 리스트 선언 및 조작, 반복, 주요 메서드 사용법 익히기

## 개념 & 문법

- 리스트: 순서 있는 여러 값 저장 가능, 인덱스로 접근
- 요소 접근/수정: 인덱스와 슬라이싱 사용 가능
- 주요 메서드: append, pop, insert, remove, sort, reverse 등

```py

# 리스트 선언 및 출력

fruits = ["사과", "바나나", "오렌지"]
numbers =[1][2][3][4]
mixed = [True, 7, "Hi"]

print("fruits:", fruits)
print("numbers:", numbers)
print("mixed:", mixed)

# 인덱스 접근 및 수정

print(f"fruits: {fruits}")  # 바나나
fruits = "포도"
print("수정된 fruits:", fruits)

# 요소 추가: append (뒤), insert (중간)

fruits.append("키위")
print("append 후:", fruits)
fruits.insert(0, "레몬")
print("insert(0, '레몬') 후:", fruits)

# 요소 제거: pop (뒤), remove (값), del (인덱스)

fruits.pop()
print("pop 후:", fruits)
fruits.remove("사과")
print("remove('사과') 후:", fruits)
del fruits
print("del fruits 후:", fruits)

# 리스트 반복

for fruit in fruits:
print("과일:", fruit)

# 슬라이스 사용 예시

print("numbers[1:3]:", numbers[1:3])

# 주요 메서드 예시: sort, reverse, count, index

numbers.append(2)
print("추가 후 numbers:", numbers)
numbers.sort()
print("정렬 후 numbers:", numbers)
numbers.reverse()
print("역순 정렬 후 numbers:", numbers)
print("2의 개수:", numbers.count(2))
print("3의 인덱스:", numbers.index(3))

# 리스트 연결 및 복사

new_numbers = numbers
print("연결된 리스트:", new_numbers)
copied = numbers[:]
print("복사된 리스트:", copied)

# 리스트 내포 (Comprehension)

squared = [x**2 for x in numbers]
print("제곱 리스트:", squared)

# 다양한 타입 저장 가능

mixed.append()
print("다양한 타입 저장:", mixed)

```

---

# 07: 딕셔너리(Dictionary)

## 학습 목표

- 딕셔너리 선언, 접근, 추가, 수정, 삭제, 순회 방법 익히기

## 개념 & 문법

- 딕셔너리: 키(key)와 값(value) 쌍으로 이루어진 자료구조
- 중괄호 {} 사용, 순서 없음(파이썬 3.7 이전)
- 키로 직접 값에 접근 가능

```py

# 딕셔너리 선언과 출력

person = {
"name": "이지연",
"age": 28,
"is_student": True
}
print("person:", person)

# 키를 통한 값 접근

print("name:", person["name"])
print("age:", person.get("age"))  # get 메서드 사용

# 값 수정 및 추가

person["age"] = 29
person["job"] = "개발자"
print("수정/추가된 person:", person)

# 키 삭제

del person["is_student"]
print("삭제 후 person:", person)

# pop으로 키 삭제 및 값 반환

job = person.pop("job")
print("pop한 job:", job)
print("pop 후 person:", person)

# 딕셔너리 순회 - 키만

print("키 순회:")
for key in person:
print(key)

# 딕셔너리 순회 - 키와 값

print("키와 값 순회:")
for key, value in person.items():
print(f"{key}: {value}")

# 중첩 딕셔너리 (객체 안에 객체)

person["address"] = {
"city": "서울",
"zipcode": "01234"
}
print("도시:", person["address"]["city"])

# 키 존재 여부 확인

print("age 키 존재?", "age" in person)

# 딕셔너리 복사 (얕은 복사)

copy_person = person.copy()
print("복사본:", copy_person)

# dict() 함수로 딕셔너리 생성

car = dict(brand="현대", model="아반떼", year=2023)
print("car:", car)
```

---

## 참고자료

- [공식 Python 튜토리얼](https://docs.python.org/3/tutorial/index.html)
- [점프 투 파이썬](https://wikidocs.net/book/1)
