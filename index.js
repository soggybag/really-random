'use strict';

/**
 * Generates Random numbers
 * @return {Number}
 */
module.exports.random = () => {
  return Math.random();
};

/**
 * Generates Random numbers
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */

module.exports.randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
