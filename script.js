// Creates variables
document.getElementById('button').addEventListener('click', number)
let first = 0
let second = 0
let total = 0

function number () {
  // Get user input from box
  first = document.getElementById('input').value
  second = document.getElementById('input2').value

  first = parseInt(first)
  second = parseInt(second)

  for (let i = 0; i < first; i++) {
    total = total + second
  }
  alert(total)
}
