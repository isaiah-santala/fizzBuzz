const { expect } = require('chai')
const { fizzBuzz } = require('./fizzBuzz')

// multiples of 3 Fizz
// multiples of 5 Buzz
// both = FizzBuzz

describe('FizzBuzz', () => {
  it('should be a function', () => {
    expect(fizzBuzz).to.be.a('function')
  })
  it('should return an array', () => {
    const test = fizzBuzz()
    expect(test).to.be.a('array')
  })
  it('should replace multiples of 3 with Fizz', () => {
    const test = fizzBuzz(3)
    expect(test).to.deep.equal(['1', '2', 'Fizz'])
  })
  it('should replace multiples of 5 with Buzz', () => {
    const test = fizzBuzz(5)
    expect(test).to.deep.equal(['1', '2', 'Fizz', '4', 'Buzz'])
  })
  it('should replace multiples of both 3 and 5 with FizzBuzz', () => {
    const test = fizzBuzz(15)
    expect(test).to.deep.equal(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
  })
})

