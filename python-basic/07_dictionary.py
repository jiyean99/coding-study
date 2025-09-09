# 07: 딕셔너리(Dictionary)
# 학습 목표: 딕셔너리 선언, 접근, 추가, 수정, 삭제, 순회 방법 익히기
# 개념:
# 1. 딕셔너리: 키(key)와 값(value) 쌍의 집합, 중괄호{} 사용
# 2. 리스트와 달리 순서 없고, 키로 값에 바로 접근 가능

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
