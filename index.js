const nullifyMultiples = (array, base) => {
  for (let i = base + base; i < array.length; i += base) {
    array[i] = null
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
    while (primes[base] === null) {
      base++
    }
    return base
  }

  let base = 2
  while (base < primes.length) {
    primes = nullifyMultiples(primes, base)
    base = next(base + 1)
  }

  // removing 0 and 1
  primes.shift()
  primes.shift()

  return primes.filter((n) => n !== null)
}

const createMultiplicationTable = (numbers) =>
  numbers.map(n => {
    let row = numbers.map(m => n * m)
    return row
  })

const showMultiplicationTable = (numbers, table, showFunx, newLineFunx) => {
  function show(n) { showFunx(n.toString()) }

  // draw the top
  showFunx(' ')
  numbers.forEach(show)
  newLineFunx()

  numbers.forEach((n, i) => {
    show(n)
    table[i].forEach(show)
    newLineFunx()
  })
}

module.exports = {
  primesTo: primesTo,
  nullifyMultiples: nullifyMultiples,
  createMultiplicationTable: createMultiplicationTable,
  showMultiplicationTable: showMultiplicationTable
}
