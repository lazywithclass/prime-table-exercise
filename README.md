## prime-table-exercise

Write an application that takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers. 

### Configuration


```bash
# get the code
$ git clone git@github.com:lazywithclass/prime-table-exercise.git

# get the dependencies
$ npm i
```

### Use it

```bash
$ npm start $integer
```

Where `$integer` is an integer of your choice, 16'000'000 as input takes less
than 2 seconds to produce more than 1'000'000 prime numbers. 

### Test it

```bash
$ npm test
```

runs both unit tests with coverage info and the performance test. 

### The requirements

 * do not use a brute force / trial division algorithm
 * should have a test for a performant prime algorithm that can generate a list of 20,000+ primes
 * small commits to git so that we can see how you’ve developed your solution
 * write your application with high unit test coverage
 * for the input and output you can use the console, a web page, or something else
 * please write an algorithm to solve the prime number generation - do not use a library method to generate your primes
 * the user should input a whole number N, where is N is at least 1
 * the application should output an N+1 x N+1 grid of numbers

Example primes multiplication table when N is 3

```
| | 2 | 3 | 5 |

| 2 | 4 | 6 | 10 |

| 3 | 6 | 9 | 15 |

| 5 | 10 | 15 | 25 |
```
