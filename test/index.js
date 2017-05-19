describe('testing environment', () => {
  it('works', () => {
    (42).should.equal(42)
  })
});

describe('prime table exercise', () => {

  const lib = require('../index')

  describe('nullifyMultiples', () => {

    it('sets to null multiples of the argument', () => {
      const result = lib.nullifyMultiples([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
      result.should.eql([0, 1, 2, 3, null, 5, null, 7, null])
    })

  })

  describe('primesTo', () => {

    it('returns an array', () => {
      lib.primesTo(10).should.be.an.instanceOf(Array)
    })

    it('returns primes if given 4', () => {
      lib.primesTo(4).should.eql([2, 3])
    })

    it('returns primes if given 5 (inclusive check)', () => {
      lib.primesTo(5).should.eql([2, 3, 5])
    })

    it('returns primes if given 30', () => {
      lib.primesTo(30).should.eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    })

  })

})
