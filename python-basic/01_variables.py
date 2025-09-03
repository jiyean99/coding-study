# 01: 변수와 자료형
# 학습 목표: 변수 선언, 자료형 확인, 값 변경 연습
# 개념:
# 1. 변수: 컴퓨터 메모리에 값을 저장하는 공간, 재할당 가능
# 2. 자료형(Type): 저장된 값의 종류를 나타냄
#    주요 기본 자료형:
#    - str : 문자열 (예: "이지연", 'hello')
#    - int : 정수 (예: 27, -5, 0)
#    - float : 실수 혹은 부동 소수점 숫자 (예: 3.14, -0.5)
#    - bool : 불리언 값, 참(True) 또는 거짓(False)
#    - None : 값이 없음을 나타냄 (특별한 자료형 NoneType)
#    - list : 여러 값을 순서대로 저장하는 가변 시퀀스형
#    - dict : 키-값 쌍으로 데이터 저장하는 자료형 (사전형)

# 문자열(str) 자료형 변수 선언 (문자들이 연결된 형태)
name = "이지연"

# 정수(int) 자료형 변수 선언 (소수점 없는 숫자)
age = 27

# 불린(bool) 자료형 변수 선언 (참 또는 거짓을 나타내는 값)
is_student = True

# 함수 선언(def 키워드로 함수 정의)
# log_var: 변수 이름과 값을 받아 해당 변수의 자료형과 값을 출력하는 함수
def log_var(var_name, value):
    # f-string을 활용해 변수명, 자료형 이름, 변수 값을 한 줄에 출력
    print(f"변수 {var_name}의 type === {type(value).__name__}, 값 === {value}")

# log_var 함수 호출, 각 변수의 자료형과 값을 출력
log_var("name", name)
log_var("age", age)
log_var("is_student", is_student)

# 변수 값 변경(재할당) 예시
name = "LEE JI YEAN"
print(f"\n변경 후 name: {name}")
