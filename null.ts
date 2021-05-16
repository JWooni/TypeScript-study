// 대입 가능
let name: string = null
let age: number = undefined

// strictNullChecks => true
// 보통 위의 옵션을 true로 하진 않는다..
// 위의 옵션이 추가되면 자기 자신이나 void에게만 할당 가능, 다른 타입에는 할당하지 못함.
// let myName: null = null; // (O)
// 'null'은 'string'타입에 할당 할 수 없다.
let myName: string = null // (X)


// 'null'은 'undefined'에 할당 할 수 없다.
let u: undefined = null // (X)

let v: void = undefined // (O)

let union: string | null | undefined = 'str'
