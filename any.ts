function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

any1.toString()

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d

function leakingAny(obj : any){
  const a = obj.num // any
  const b = a + 1 // any
  return b // any
}

const c = leakingAny({num: 0}) // any
c.indexOf('0')