"use strict";

/**
 * Sums values in the array by recursive
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
function sum(array) {
    if (array.length == 1) return array[0];

    return array[0] + sum(array.slice(1));
}

console.log(sum([2, 4, 6])); // 12