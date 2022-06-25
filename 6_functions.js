// Move Sequential Execution position from Line X to Line Y

function catSound() {
  console.log('meow')
}

console.log('I am cat and I make sound like ')
catSound()

function sound(type) {
  if (type === 'dog') {
    console.log('bark')
  } else {
    catSound()
  }
}

console.log('I am dog and I make sound like ')
sound('dog')

function sum(a, b) {
  return a + b
}

let result = sum(3, 5)
console.log(result)

let sum2 = (a, b) => {
  return a + b
}
sum2(3, 5)
