'use strict';

/**
 * Generates Random numbers
 * @return {Number}
 */
module.exports.random = () => {
  return Math.random();
};

/**
 * Generates Random numbers from min to max - 1
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */

module.exports.randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Returns random true or false
 * @return {Bool}
 */

module.exports.randomRange = () => {
  return Math.random() < 0.5 ? true : false;
};
