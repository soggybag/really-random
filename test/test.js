'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const reallyRandom = require('../index');

// ----------------------------------------------------
describe('#random', function() {
    it('should return a number', function() {
      const n = reallyRandom.random();
      expect(n).to.be.a('number');
    });

    it('should return a random number between 0 and 1', function() {
      for (var i = 0; i < 100; i += 1) {
        const n = reallyRandom.random();
        assert.isAtLeast(n, 0, `${n} should be 0.0 or greater`);
        assert.isBelow(n, 1, `${n} should be less than 1.0`);
      }
    });

    it('should return random numbers', function() {
      const array = [];
      for (var i = 0; i < 100; i += 1) {
        const n = reallyRandom.random();
        for (var j = 0; j < array.length; j += 1) {
          expect(n).to.not.equal(array[j]);
          array.push(n);
        }
      }
    });
});

// ----------------------------------------------------
describe('#randomRange', function() {
  it('should return an Integer', function() {
    const n = reallyRandom.randomRange(1, 100)
    var isInt = n % 1 === 0;
    assert(isInt, 'not an integer:' + n);
  });

  it('should return a random number from min to max - 1', function() {
    const min = 1;
    const max = 7;
    for (let i = 0; i < 100; i += 1) {
      const n = reallyRandom.randomRange(min, max);
      assert.isAtLeast(n, min, `${n} should be ${min} or greater`);
      assert.isBelow(n, max, `${n} should be less than ${max}`);
    }
  });

  it('should return random numbers', function() {
    const array = [];
    const min = 1;
    const max = 7;
    for (var i = 0; i < 100; i += 1) {
      const n = reallyRandom.randomRange(min, max);
      array.push(n);
    }
    for (var i = min; i < max; i += 1) {
      expect(array).to.include(i);
    }
  });
});

// ----------------------------------------------------
describe('#randomBool', function() {
    it('should return a bool', function() {
      const n = reallyRandom.randomBool();
      expect(n).to.be.a('boolean');
    });

    it('should return true and false', function() {
      var isTrue = false;
      var isFalse = true;
      for (var i = 0; i < 100; i += 1) {
        if (!isTrue) { isTrue = reallyRandom.randomBool() }
        if (isFalse) { isFalse = reallyRandom.randomBool() }
      }

      expect(isTrue).to.equal(true);
      expect(isFalse).to.equal(false);
    });
});

// ----------------------------------------------------
describe('#randomArray', function() {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const array = source.slice();

    let shuffledArray = reallyRandom.randomArray(array)

    it('should return an array', function() {
      expect(shuffledArray).to.be.an('array');
    });

    it('should have same number of items', function() {
      expect(shuffledArray.length).to.be.equal(array.length);
    });

    it('should not have reference equality with source array', function() {
      expect(shuffledArray).to.not.be.equal(array);
    });

    it('should not modify source array', function() {
      for (var i = 0; i < array.length; i += 1) {
        expect(array[i]).to.be.equal(source[i]);
      }
    });
});


// ----------------------------------------------------
describe('#shuffleArray', function() {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const array = source.slice();

    let shuffledArray = reallyRandom.shuffleArray(array);

    it('should return an array', function() {
      expect(shuffledArray).to.be.an('array');
    });

    it('should have same number of items', function() {
      expect(shuffledArray.length).to.be.equal(array.length);
    });

    it('should have reference equality with source array', function() {
      expect(shuffledArray).to.be.equal(array);
    });

    // The elements should be mixed up...

});


// ----------------------------------------------------
describe('#dieX', function() {
  const dieSize6 = 6;
  const dieSize20 = 20;
  const d6 = reallyRandom.dieX(dieSize6);
  const d20 = reallyRandom.dieX(dieSize20);

  it('should return a number', function() {
    const n = d6();
    expect(n).to.be.a('number');
  });

  it('should generate numbers between 1 and 6', function() {
    for (let i = 0; i < 100; i += 1) {
      const n = d6();
      assert.isAtLeast(n, 1, `${n} should be 1 or greater`);
      assert.isBelow(n, dieSize6 + 1, `${n} should be equal or less than ${dieSize6}`);
    }
  })
})
