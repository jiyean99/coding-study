// 01: 변수와 자료형
// 학습 목표: 변수 선언, 자료형 확인, 값 변경 연습
// 개념:
// 1. 변수: 컴퓨터 메모리에 값을 저장하는 공간, 재할당 가능
// 2. 자료형(Type): 저장된 값의 종류를 나타냄
//    주요 기본 자료형:
//    - String : 문자열 (예: "이지연", "hello")
//    - int : 정수 (예: 27, -5, 0)
//    - float / double : 실수 혹은 부동 소수점 숫자 (예: 3.14, -0.5)
//    - boolean : 불리언 값, 참(true) 또는 거짓(false)

public class VariablesExample {
    // 문자열(String) 자료형 변수 선언 (문자들이 연결된 형태)
    static String name = "이지연";

    // 정수(int) 자료형 변수 선언 (소수점 없는 숫자)
    static int age = 27;

    // 불린(boolean) 자료형 변수 선언 (참 또는 거짓을 나타내는 값)
    static boolean isStudent = true;

    // 변수 정보를 출력하는 메서드 선언
    static void logVar(String varName, Object value) {
        // value instanceof로 자료형 확인 후 출력 (간단화)
        String typeName;
        if (value instanceof String) {
            typeName = "String";
        } else if (value instanceof Integer) {
            typeName = "int";
        } else if (value instanceof Boolean) {
            typeName = "boolean";
        } else {
            typeName = value.getClass().getSimpleName();
        }
        System.out.printf("변수 %s의 type === %s, 값 === %s%n", varName, typeName, value);
    }

    public static void main(String[] args) {
        // 변수 출력 (각 변수의 자료형과 값 함께 출력)
        logVar("name", name);
        logVar("age", age);
        logVar("isStudent", isStudent);

        // 변수 값 변경(재할당) 예시
        name = "LEE JI YEAN";
        System.out.printf("%n변경 후 name: %s%n", name);
    }
}
