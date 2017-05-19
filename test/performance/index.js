require('should')

describe('prime function speed', () => {

  const lib = require('../../index')

  it('returns more than 1000000 prime numbers in less than 2 seconds', () => {
    const primes = lib.primesTo(16000000)
    primes.length.should.be.above(1000000)
  })

})
