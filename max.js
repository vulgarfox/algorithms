"use strict";

/**
 * Calculate the largest number
 * This solution only works for arrays longer than one
 * @param {Array} array Array of numbers
 * @returns {number} The argest number
 */
function max(arr) {
    if (arr.length === 1) return arr[0]

    return arr[0] > max(arr.slice(1)) ? arr[0] : max(arr.slice(1));
}

console.log(max([2, 4, 7, 6])) // 7
console.log(max([1, 5, 10, 25, 16, 1])); // 25