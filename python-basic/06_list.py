# 06: 리스트
# 학습 목표: 리스트 선언 및 조작, 반복, 주요 메서드 사용법 익히기
# 개념:
# 1. 리스트: 순서 있는 여러 값 저장 가능, 인덱스로 접근
# 2. 인덱스와 슬라이스로 요소 접근 및 수정
# 3. 주요 메서드: append, pop, insert, remove, sort, reverse 등

# 리스트 선언 및 출력
fruits = ["사과", "바나나", "오렌지"]
numbers = [1, 2, 3, 4]
mixed = [True, 7, "Hi"]

print("fruits:", fruits)
print("numbers:", numbers)
print("mixed:", mixed)

# 인덱스 접근 및 수정
print(f"fruits[1]: {fruits[1]}")  # 바나나
fruits[1] = "포도"
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
del fruits[0]
print("del fruits[0] 후:", fruits)

# 리스트 반복
for fruit in fruits:
    print("과일:", fruit)

# 슬라이스 사용 예시
print("numbers[1:3]:", numbers[1:3])  # [2, 3]

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
new_numbers = numbers + [10, 20]
print("연결된 리스트:", new_numbers)
copied = numbers[:]
print("복사된 리스트:", copied)

# 리스트 내포 (Comprehension)
squared = [x**2 for x in numbers]
print("제곱 리스트:", squared)

# 다양한 타입 저장 가능
mixed.append([99, 100])
print("다양한 타입 저장:", mixed)
