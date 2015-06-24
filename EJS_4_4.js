// function deepEqual, two values, true only if they are the same value
// or are objects with the same properties

/* 
function deepEqual(valOne, valTwo) {
  // if these two are the same
  if (valOne === valTwo) {
    return true;
  } else {
    if (typeof valOne === "object" && typeof valTwo === "object") {
      for (var prop in valOne) {
        if (valOne[prop] === valTwo[prop]) {
          return true;
        } else {
          return deepEqual(valOne, valTwo[prop])
        }
      }
    } else {
      return false;
    }
  }
}
*/

function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== 'object' ||
      b === null || typeof b !== 'object')
    return false;

  var propsInA = 0;
  var propsInB = 0;

  for (var prop in a) {
    // for each property that is in 'a', increment counter
    propsInA++;
  }

  for (var prop in b) {
    // for each property that is in 'b', increment counter
    propsInB++;
    // is the current property the same?
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
  // returns whether or not the count is the same
  return propsInA === propsInB;
}