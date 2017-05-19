const sinon = require('sinon')
require('should')

describe('testing environment', () => {
  it('works', () => {
    (42).should.equal(42)
  })
});

describe('prime table exercise', () => {

  const lib = require('../../index')

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

  describe('createMultiplicationTable', () => {

    it('creates a multiplication table, given an array of numbers', () => {
      const table = lib.createMultiplicationTable([1, 2, 3])
      const expected = [
        [ 1, 2, 3 ],
        [ 2, 4, 6 ],
        [ 3, 6, 9 ],
      ]
      table[0].should.eql(expected[0])
      table[1].should.eql(expected[1])
      table[2].should.eql(expected[2])
    });

  });

  describe('showMultiplicationTable', () => {

    let showFunx = sinon.stub(),
        newLineFunx = sinon.stub()

    beforeEach(() => {
      showFunx = sinon.stub()
      newLineFunx = sinon.stub()
    })

    it('shows the multiplication table', () => {
      const table = [
        [ 4, 6, 10 ],
        [ 6, 9, 15 ],
        [ 10, 15, 25 ],
      ]
      const numbers = [ 2, 3, 5 ]
      lib.showMultiplicationTable(numbers, table, showFunx, newLineFunx)

      // assert on the borders of the table shown to the user
      // top row
      showFunx.args[0][0].should.equal(' ')
      showFunx.args[1][0].should.equal('2')
      showFunx.args[2][0].should.equal('3')
      showFunx.args[3][0].should.equal('5')

      // assert on the table content
      showFunx.args[4][0].should.equal('2')
      showFunx.args[5][0].should.equal('4')
      showFunx.args[6][0].should.equal('6')
      showFunx.args[7][0].should.equal('10')

      showFunx.args[8][0].should.equal('3')
      showFunx.args[9][0].should.equal('6')
      showFunx.args[10][0].should.equal('9')
      showFunx.args[11][0].should.equal('15')

      showFunx.args[12][0].should.equal('5')
      showFunx.args[13][0].should.equal('10')
      showFunx.args[14][0].should.equal('15')
      showFunx.args[15][0].should.equal('25')

      newLineFunx.callCount.should.equal(4)
    });

  })

})
