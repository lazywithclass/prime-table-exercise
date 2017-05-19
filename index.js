const divisibleBy = (n, m) => n % m === 0

const nullifyMultiples = (array, base) => {
  for (let i = base + base; i < array.length; i += base) {
    if (divisibleBy(i, base)) array[i] = null
  }

  return array
}

// using https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
const primesTo = (limit) => {
  let primes = []
  for (let i = 0; i <= limit; i++) {
    primes.push(i)
  }

  function next(base) {
    return primes[base] === null ? next(base + 1) : base
  }

  function recurNullify(base) {
    base = next(base)
    if (base > primes.length) return
    primes = nullifyMultiples(primes, base)
    recurNullify(base + 1)
  }

  recurNullify(2)

  // removing 0 and 1
  primes.shift()
  primes.shift()

  return primes.filter((n) => n !== null)
}

module.exports = {
  primesTo: primesTo,
  nullifyMultiples: nullifyMultiples
}
