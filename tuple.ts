let x: [String, number]

x = ['hello', 30]

// x = [10, 'JWooi']

x[2] = 'world' // '"world"' 형식은 'undefined' 형식에 할당할 수 없습니다.

const person: [string, number] = ['JWooi', 30]

const [first, second, third] = person // 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.