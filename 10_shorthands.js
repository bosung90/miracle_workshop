// Object property shorthand
let foo = '1'
let bar = '2'
let obj = {
  foo: foo,
  bar: bar,
}
obj = {
  foo,
  bar,
}

// Ternary Operation
let color
if (5 > 10) {
  color = 'red'
} else {
  color = 'blue'
}
let color2 = 5 > 10 ? 'red' : 'blue'
