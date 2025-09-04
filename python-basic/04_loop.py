# 04: 반복문
# 학습 목표: 반복문 종류와 기본 문법 이해, 반복 제어 연습, 컬렉션 순회 연습
# 개념:
# 1. 반복문 종류:
#    - for문: 지정한 범위 내에서 반복, 시퀀스(리스트, 문자열 등) 순회 가능
#    - while문: 조건이 참인 동안 반복 실행
# 2. break/continue: 반복 제어용 키워드로 반복문 탈출 또는 다음 반복으로 건너뜀
# 3. 반복문과 함수 결합: 반복 과정 출력용 함수 호출

# 반복 변수 값 출력 함수 정의
def log_var(var_name, value):
    print(f"변수 {var_name} 값 === {value}")

# for문 예시: 1부터 5까지 출력
for i in range(1, 6):
    log_var("i", i)

print()

# while문 예시: 1부터 5까지 출력
j = 1
while j <= 5:
    log_var("j", j)
    j += 1

print()

# break와 continue 예시
for x in range(1, 11):
    if x % 2 == 0:
        continue  # 짝수일 때는 출력하지 않고 다음 반복으로
    if x > 7:
        break  # 7보다 크면 반복 종료
    log_var("x(홀수 && <=7)", x)

print()

# 리스트 순회를 위한 for문
fruits = ['사과', '바나나', '체리']
for index, fruit in enumerate(fruits):
    log_var(f"fruits[{index}]", fruit)

print()

# 문자열 순회
word = "Python"
for char in word:
    log_var("char", char)

print()

# while문과 조건 결합 예시
count = 0
while True:
    count += 1
    if count > 3:
        break
    log_var("count", count)
