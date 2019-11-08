exports.fizzBuzz = (number) => {
  const res = []

  for (let i = 1; i <= number; i++) {
    let count = `${i}`

    if (i % 3 === 0) count = 'Fizz'
    if (i % 5 === 0) count = 'Buzz'
    if (i % 3 === 0 && i % 5 === 0) count = 'FizzBuzz'

    res.push(count)
  }

  return res
}