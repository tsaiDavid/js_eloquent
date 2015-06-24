// Use the reduce method with concat to 'flatten' an array of arrays
// into a single array that has all the elements of the input arrays

var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  // The 'array' is whatever array is passed in
    // You then call reduce on it
      // Anonymous function takes a,b (the accumulator and the next el)
  return array.reduce(function(a,b) {
    // Return an array (result of concat a & b)
    return a.concat(b);
  })
};

flatten(arrays);