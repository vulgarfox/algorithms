"use strict";

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
    if (array.length < 2) return array;

    const pivot = array[0];

    const less = array.slice(1).filter(function (el) {
        return el <= pivot;
    });

    const greater = array.slice(1).filter(function (el) {
        return el > pivot;
    });

    return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]