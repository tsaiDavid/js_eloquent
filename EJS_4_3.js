// create a funciton arrayToList that creates
// a nested list of objects

function arrayToList(array) {
  // declare x and assign it the last element, with null
  var list = {value: array[array.length - 1], rest: null};
  // within the loop, I start at the second to last element
  for (var i = (array.length - 2); i >= 0; i--) {
    // I can use x as rest because x is not assigned until
    // fully resolved
    list = {value: array[i], rest: list}
  }
  // return x
  return x;
}

// write listToArray function that produces array
// from a list

function listToArray(list) {
  var result = [];
  for (var node = list; node; node = node.rest) {
    result.push(node.value);
  }
  return result;
}

// self exercise: write listToArray with while

function listToArray(list) {
  var result = [];
  // while list is truthy (since rest could become null)
  while (list) {
    result.push(list.value);
    // resolve list.rest and assign to list
    list = list.rest
  }
  return result;
}

// write prepend, takes element from list and creates a new list
// adds element to the front

function prepend(element, list) {
  return {value: element, rest: list}
}

// write nth, takes list and a number and returns
// why does nth recursion work?

function nth(list, num) {
  // termination case
  if (!list)
    return undefined;
  // base case
  else if (num === 0)
    return list.value;
  // recursive case
  else
    return nth(list.rest, num - 1);
}




