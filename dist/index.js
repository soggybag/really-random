'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.flip = exports.flipCoin = exports.dieX = exports.shuffle = exports.randomArray = exports.randomBool = exports.randomRange = exports.random = void 0;
/**
 * Generates Random numbers
 * @return {Number}
 */
const random = (n) => {
    return Math.floor(Math.random() * n);
};
exports.random = random;
/**
 * Generates Random numbers from min to max - 1
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.randomRange = randomRange;
/**
 * Returns random true or false
 * @return {Bool}
 */
const randomBool = () => {
    return Math.random() < 0.5 ? true : false;
};
exports.randomBool = randomBool;
/**
 * Returns copy of array with elements randomized
 * @param {Array} Source Array
 * @return {Array} New Array
 */
// T extends Array<unknown>
const randomArray = (array) => {
    const newArray = [];
    const source = array.slice();
    while (source.length > 0) {
        newArray.push(source.splice(randomRange(0, source.length), 1)[0]);
    }
    return newArray;
};
exports.randomArray = randomArray;
/**
 * Shuffles array in place. Uses the Fisher Yates method: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
 * @param {Array} a items An array containing the items.
 */
const shuffle = (a) => {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};
exports.shuffle = shuffle;
/**
 * Returns a function that generates random numbers in The
 * range of 1 to DieSize.
 * @param {Int} dieSize
 * @return {Function} New Array
 */
const dieX = (n) => {
    const dieSize = Math.floor(n);
    return (bonus = 0) => {
        return randomRange(1, dieSize + 1) + bonus;
    };
};
exports.dieX = dieX;
/**
 * Returns 'heads' or 'tails'
 * @returns String
 */
const flipCoin = () => {
    return randomBool() ? 'heads' : 'tails';
};
exports.flipCoin = flipCoin;
/**
 * Returns true or false
 * @returns Bool
 */
const flip = () => {
    return randomBool();
};
exports.flip = flip;
/**
 * Pick returns a random element from the
 * provided array
 * @param {T[]} array
 * @returns T
 */
const pick = (arr) => {
    return arr[random(arr.length)];
};
exports.pick = pick;
