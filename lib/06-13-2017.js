import R from 'ramda'

const foo = a => b => a + b

const foo5 = foo(5)

console.log(foo5(5))
