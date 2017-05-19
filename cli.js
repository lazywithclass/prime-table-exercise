let limit = process.argv[2],
    lib = require('./index')

let primes = lib.primesTo(limit),
    multiplicationTable = lib.createMultiplicationTable(primes)

function printNumber(n) { process.stdout.write(`| ${n} `) }
function printNewline() { process.stdout.write('|\n') }


lib.showMultiplicationTable(primes,
                            multiplicationTable,
                            printNumber,
                            printNewline)

