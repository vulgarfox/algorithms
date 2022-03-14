'use strict';

function findSmallestIndex(array) {
    var smallestElement = array[0];
    var smallestIndex = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selectionSort(array) {
    var sortedArray = [];
    var length = array.length;

    for (var i = 0; i < length; i++) {
        var smallestIndex = findSmallestIndex(array);
        sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]