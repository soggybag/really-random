'use strict';

/**
 * Generates Random numbers
 * @return {Number}
 */

const random = () => {
  return Math.random();
};

module.exports.random = random;

/**
 * Generates Random numbers from min to max - 1
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.randomRange = randomRange;

/**
 * Returns random true or false
 * @return {Bool}
 */

const randomBool = () => {
  return Math.random() < 0.5 ? true : false;
};


module.exports.randomBool = randomBool;

module.exports.randomArray = (array) => {
  var newArray = [];
  for (var i = 0; i < array.length; i += 1) {
    newArray.push(array.splice(randomRange(0, array.length), 1));
  }
  return newArray;
}
