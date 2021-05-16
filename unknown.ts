declare const maybe: unknown

const aNumder: number = maybe // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.

if (maybe === true) {
  const aBoolean: boolean = maybe
 // const aString: string = maybe
}

if (typeof maybe === 'string'){
  const aString: string = maybe
 // const aBoolean: boolean = maybe 
}