describe('prime function speed', () => {

  const lib = require('../../index')

  it('returns first 1000000 prime numbers in less 2 seconds', () => {
    const primes = lib.primesTo(15200000)
    // console.log(primes.length)
  })

})
