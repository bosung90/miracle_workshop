const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let answer = Math.ceil(Math.random() * 100)

function playGame() {
  rl.question('Guess a number: ', function (input) {
    let num = parseInt(input)
    if (isNaN(num)) {
      console.log('Invalid number.')
      playGame()
    } else if (num === answer) {
      console.log('Correct! Answer is ' + answer)
      return 0
    } else if (num > answer) {
      console.log('Too high!')
      playGame()
    } else {
      console.log('Too low!')
      playGame()
    }
  })
}

playGame()
