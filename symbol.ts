console.log(Symbol('jwooni') === Symbol('jwooni'))

const sym = Symbol();

const obj = {
  [sym]: "value",
}

obj[sym]