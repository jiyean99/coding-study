# 03: 조건문 (if, if-else, if-elif-else)
# 학습 목표:
# 1. 조건문의 개념 이해하기
# 2. if, if-else, if-elif-else 기본 구조 연습하기
# 3. 조건에 따른 코드 흐름 제어 연습하기
# 개념:
# 1. 조건문 : 프로그램 실행 중 특정 조건(True/False)에 따라 실행할 코드 블록을 분기하는 문법
# 2. 기본구조
#   2-1: if문 
#       if 조건식:
#           조건식이 참일 때 실행할 코드
#   2-2: if-else문
#       if 조건식:
#           조건식이 참일 때 실행할 코드
#       else:
#           조건식이 거짓일 때 실행할 코드
#   2-3: if-elif-else문
#       if 조건식1:
#           조건1이 참일 때 실행
#       elif 조건식2:
#           조건1이 거짓이고, 조건2가 참일 때 실행
#       else:
#           위 모든 조건이 거짓일 때 실행
#   2-4: 조건부 표현식 (삼항 연산자)
#       변수 = 참일 때 값 if 조건 else 거짓일 때 값

# 1
score = 85

if score >= 60:
    print("합격입니다.")  # 조건이 True일 때 실행


# 2
score = 45

if score >= 60:
    print("합격입니다.")
else:
    print("불합격입니다.")  # 조건이 거짓일 때 실행


# 3
score = 75

if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("F학점")

# 4
score = 85
result = "합격" if score >= 60 else "불합격"
print(f"조건부 표현식 결과: {result}")

# 주의사항
# - 조건식은 반드시 True 또는 False를 반환해야 함
# - 파이썬은 코드 블록을 들여쓰기로 구분 (보통 스페이스 4개)
# - 조건은 다양한 비교 연산자(==, !=, <, > 등)나 논리 연산자(and, or, not) 사용 가능

