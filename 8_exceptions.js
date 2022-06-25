// Program runs into unexpected code, doesn't know how to deal with it.

try {
  function sound() {
    console.log('bark')
  }

  soundd()
} catch (e) {
  console.log('I got you')
}

console.log('go on...')
