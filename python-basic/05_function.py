# 05: 함수
# 학습 목표: 함수 정의와 호출, 매개변수와 반환값 사용법 익히기
# 개념:
# 1. 함수: 특정 기능을 수행하는 코드 블록, 반복 사용 가능
# 2. 매개변수(Parameters): 함수를 호출할 때 전달하는 값
# 3. 반환값(Return): 함수가 값을 반환할 때 사용
# 4. 기본 매개변수: 인자가 없을 때 기본값으로 사용

# 함수 정의: 인사 메시지 출력 함수
def greet(name):
    return f"안녕! 난 {name}!"

# 함수 호출 및 결과 출력
print(greet("이지연"))

# 매개변수가 여러 개인 함수
def add(a, b):
    return a + b

print(f"add(3, 5) = {add(3, 5)}")

# 기본 매개변수 사용 예시
def power(base, exponent=2):
    return base ** exponent

print(power(4))      # 기본 지수 2 사용: 16
print(power(2, 3))   # 지수 3으로 변경: 8

# 반환값 없는 함수 예시
def print_message(message):
    print(f"메시지: {message}")

print_message("함수 학습 중!")

# 중첩 함수(함수 안에 함수)
def outer():
    def inner():
        return "내부 함수 결과"
    result = inner()
    return f"외부 함수에서 받은: {result}"

print(outer())

# 익명 함수 (람다 함수) 예시
square = lambda x: x * x
print(f"square(6) = {square(6)}")

# 함수도 객체처럼 변수에 할당 가능
def multiply(x, y):
    return x * y

func = multiply
print(f"func(4, 5) = {func(4, 5)}")

# 고급: 함수 디폴트 인자는 실행 시 한 번만 평가됨을 기억
def append_to(element, to=[]):
    to.append(element)
    return to

print(append_to(1))  # [1]
print(append_to(2))  # [1, 2] <-- 주의: 기본 리스트가 공유됨

# 올바른 기본값 사용법
def append_to_fixed(element, to=None):
    if to is None:
        to = []
    to.append(element)
    return to

print(append_to_fixed(1))  # [1]
print(append_to_fixed(2))  # [2]
