let isDone:boolean = false

isDone = true

console.log(typeof isDone) // 'boolean'

// booleand(프리미티브 타입)은 Boolean(레퍼 객체)에 할당 할 수 있다.
let isOk: Boolean = true

// Boolean(레퍼 객체)은 boolean(프리미티브 타입)에 할당 할 수 없다.
// 'boolean'은 기본 요소이지만‘Boolean’은 래퍼 객체입니다.
// 가능하면 'boolean'을 사용하는 것이 좋습니다.
let isNotOk: boolean = new Boolean(true)

console.log('isOk =',isOk)
console.log(isNotOk)