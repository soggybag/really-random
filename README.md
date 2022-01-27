![travis badge](https://travis-ci.org/soggybag/really-random.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/soggybag/really-random/badge.svg?branch=master)](https://coveralls.io/github/soggybag/really-random?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/ddb65c2e91ad67ffb6c1/maintainability)](https://codeclimate.com/github/soggybag/really-random/maintainability)

![GitHub repo file count (file type)](https://img.shields.io/github/directory-file-count/soggybag/really-random?type=js)

![npm](https://img.shields.io/npm/v/really-random)


# really-random

Utilities for generating random results. Includes utilities to generate
random numbers, integers in range, and randomizing in Arrays.

## Installation

```JavaScript
const reallyRandom = require('really-random');
```

## Usage

Generate a random number between 0 and 1. This is an alias for `Math.random()`.

```JavaScript
const n = reallyRandom.random();
```

Generate a random Int in range of min to max - 1. `randomRange(min, max)`.

```JavaScript
const dieRoll = reallyRandom.randomRange(1, 6);
```

Generate a random Boolean.

```JavaScript
const maybe = reallyRandom.randomBool();
```

Generate a die roll function. Returns a function that generates die rolls of
an n sided die with numbers in the range of 1 to n.

```JavaScript
const d6 = dieX(6);
console.log(d6() + d6()); // Outputs 2 to 12

const d20 = dieX(20);
const toHit = d20() + 3;
```

You can also pass the bonus into the die roll function.

```JavaScript
const d6 = dieX(6);
console.log(d6(1)); // Outputs 2 to 7 simulates d6+1

const d20 = dieX(20);
const toHit = d20(3); // Outputs 4 to 23 simulates d20+3
```

Return a copy of an array with elements randomized.

```JavaScript
const cards = ['a', 'b', 'c', 'd'];
const shuffled = reallyRandom.randomArray(cards);
```

Randomize an array in place.

```JavaScript
const cards = ['a', 'b', 'c', 'd'];
const shuffledCards = reallyRandom.shuffleArray(cards);
```

## Getting Started 

Run Tests

- npm run test
