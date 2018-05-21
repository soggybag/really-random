![travis badge](https://travis-ci.org/soggybag/really-random.svg?branch=master)

[![Coverage Status](https://coveralls.io/repos/github/soggybag/really-random/badge.svg?branch=master)](https://coveralls.io/github/soggybag/really-random?branch=master)

[![Maintainability](https://api.codeclimate.com/v1/badges/ddb65c2e91ad67ffb6c1/maintainability)](https://codeclimate.com/github/soggybag/really-random/maintainability)

# really-random

Some random utilities.

## Installation

`const reallyRandom = require('really-random');`

## Usage

Generate a random number between 0 and 1. This is an alias for `Math.random()`.

`const n = reallyRandom.random();`

Generate a random Int in range of min to max - 1. `randomRange(min, max)`.

`cosnt d6 = reallyRandom.randomRange(1, 6);`

Generate a random Boolean.

`const maybe = reallyRandom.randomBool();`

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
