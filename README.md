# 기초코딩 + 코딩테스트 학습

## 언어별 학습 목표

### 1. JavaScript (Node.js 포함)

- [x] 변수, 자료형, 연산자
- [x] 조건문, 반복문
- [x] 함수
- [x] 배열, 객체
- [ ] ES6+ 문법
- [ ] Node.js 기본 (fs, http, 모듈)
- [ ] Express.js 서버
- [ ] 미니 프로젝트: TODO 앱, 게시판, 채팅 서버

### 2. TypeScript

- [ ] 타입 기초
- [ ] 함수/객체 타입
- [ ] 인터페이스, 제네릭
- [ ] 미니 프로젝트: CLI ToDo 앱

### 3. Java

- [ ] 변수, 자료형, 연산자
- [ ] 조건문, 반복문
- [ ] 함수
- [ ] 배열, 객체
- [ ] 클래스, 상속, 인터페이스
- [ ] 미니 프로젝트: 간단 콘솔 게임, 알고리즘 문제

### 4. Python

- [x] 변수, 자료형, 연산자
- [x] 조건문, 반복문
- [x] 함수
- [x] 리스트, 딕셔너리
- [ ] 파일 입출력, 모듈
- [ ] 미니 프로젝트: 텍스트 분석, 간단 크롤러

---

## 코딩테스트 TODO

### 기초 난이도

- [ ] 문자열 뒤집기
- [ ] 배열 최댓값/최솟값
- [ ] A + B
- [ ] 약수 구하기
- [ ] 소수 판별

### 중급 난이도

- [ ] 스택/큐
- [ ] 해시 (완주하지 못한 선수)
- [ ] 정렬 응용 (K번째 수)
- [ ] DFS/BFS 기본
- [ ] 그리디 알고리즘 (회의실 배정)

### 심화 난이도

- [ ] 동적 프로그래밍 (피보나치, 계단 오르기)
- [ ] 이분 탐색
- [ ] 그래프 탐색 (최단 경로)

---

## 폴더 구조 예시

```
coding-study/
│
├── README.md
├── java-basic/
│   └── 변수/조건문/함수/클래스 예제
├── java-projects/
│   └── 간단 콘솔 게임, 알고리즘 문제 풀이
├── js-basic/
│   └── 변수/조건문/함수/배열/객체 예제
├── js-projects/
│   └── calculator.js
├── ts-basic/
│   └── 타입/함수/클래스 파일
├── ts-projects/
│   └── todo.ts
├── node-basic/
│   └── fs/http/모듈 예제
├── node-projects/
│   └── note-app.js
├── python-basic/
│   └── 변수/조건문/리스트/함수 예제
├── python-projects/
│   └── text_analysis.py
```

---

## (추가) Windows 환경 실행 가이드

### 1️⃣ JavaScript (Node.js)

#### Node.js 설치 확인

```bash
node -v
```

#### JS 파일 실행

```bash
cd C:\dev\coding-study
node js-basic\01-variables.js
```

- `console.log()` 출력 내용이 콘솔에 표시됨

### 2️⃣ Python

#### Python 설치 확인

```bash
python --version
# 또는
py --version
```

#### Python 파일 실행

```bash
cd C:\dev\coding-study
python python-basic\01_variables.py
# 또는
py python-basic\01_variables.py
```

- `print()` 출력 내용이 터미널에 나타남

### 3️⃣ Java 컴파일 및 실행

```bash
cd C:\dev\coding-study\java-basic
javac HelloWorld.java
java HelloWorld
```

- `javac`로 컴파일 후 `java`로 실행
- Java JDK 설치 및 환경 변수 설정 필수

### (번외) C++

#### C++ 컴파일러 설치

- **Windows**: MinGW 또는 Visual Studio Build Tools 설치
- 설치 후 환경 변수 PATH에 `g++` 경로 추가

#### C++ 파일 컴파일 및 실행

```bash
cd C:\dev\coding-study
g++ cpp-basic\01_variables.cpp -o output
.\output.exe
```

- `cout` 출력 내용이 터미널에 표시됨

---

### 추가 팁

폴더 이동 없이 실행하려면, 파일 경로 전체 지정 가능:

```bash
node C:\dev\coding-study\js-basic\01-variables.js
python C:\dev\coding-study\python-basic\01_variables.py
g++ C:\dev\coding-study\cpp-basic\01-variables.cpp -o C:\dev\coding-study\cpp-basic\output && C:\dev\coding-study\cpp-basic\output.exe
```
