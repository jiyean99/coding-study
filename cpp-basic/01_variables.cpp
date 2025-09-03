// 01: 변수와 자료형
// 학습 목표:
// 1. 변수 선언과 초기화 연습
// 2. 주요 기본 자료형 이해
// 3. 값 출력 및 값 변경 연습하기

#include <iostream>
#include <string> // std::string 사용을 위해 포함

using namespace std;

// 함수 선언
// logVar: 변수 이름과 값을 받아서 변수 타입과 값을 출력하는 함수 (함수 오버로딩 사용)
void logVar(const string& varName, const string& value) {
    cout << "변수 " << varName << "의 type === string, 값 === " << value << endl;
}

void logVar(const string& varName, int value) {
    cout << "변수 " << varName << "의 type === int, 값 === " << value << endl;
}

void logVar(const string& varName, bool value) {
    cout << "변수 " << varName << "의 type === bool, 값 === " << (value ? "true" : "false") << endl;
}

int main() {
    // 문자열(string) 자료형 변수 선언 (문자들의 집합)
    string name = "이지연";

    // 정수(int) 자료형 변수 선언 (소수점 없는 숫자)
    int age = 27;

    // 불린(bool) 자료형 변수 선언 (참 또는 거짓)
    bool isStudent = true;

    // 변수 출력
    logVar("name", name);
    logVar("age", age);
    logVar("isStudent", isStudent);

    // 변수 값 변경 및 출력
    name = "LEE JI YEAN";
    cout << "\n변경 후 name: " << name << endl;

    return 0;
}
