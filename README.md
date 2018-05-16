![travis badge](https://travis-ci.org/soggybag/really-random.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/soggybag/really-random/badge.svg?branch=master)](https://coveralls.io/github/soggybag/really-random?branch=master)

# really-random

Some random utilities.

## Installation

`const reallyRandom = require('really-random');`

## Usage

Generate a random number between 0 and 1. This is an alias for `Math.random()`.

`console.log(reallyRandom.random());`

Generate a random Int in range of min to max - 1. `reallyRandom.randomRange(min, max)`.

`console.log(reallyRandom.randomRange(1, 6));`

Generate a random Boolean.

`console.log(reallyRandom.randomBool());`
