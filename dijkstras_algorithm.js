"use strict";

const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

/**
 * Find the lowest node
 * @param {Object} itCosts Hash table
 * @returns {(string|null)} The lowest node
 */
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    const cost = costs[node];

    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];

  Object.keys(neighbors).forEach(function (n) {
    const new_cost = cost + neighbors[n];

    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  });

  processed = processed.concat(node);

  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs);
