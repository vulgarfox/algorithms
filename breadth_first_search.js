const graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
function personIsSeller(name) {
  return name[name.length - 1] === "m";
}

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @returns {boolean} Search results
 */
function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);

  const searched = [];

  while (search_queue.length) {
    let person = search_queue.shift();

    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(person + " is a mango seller!");

        return true;
      }

      search_queue = search_queue.concat(graph[person]);
      searched.push(person);
    }
  }
  return false;
}

search("you");
