// console.log(sum(range(1, 10)));

// range function that takes start and end
function range(start, end) {
  // returns an array containing all the numbers from start to end
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i)
  }
  return result;
}

// sum function that takes array and returns sum
function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// modify your range function to take an optional third arg
// step value, if no step is given, array increments by one

function range(start, end, step) {
  var result = [];
  // if only two arguments are passed:
  if (arguments.length < 3) {
    if (start < end) {
      // assign 1 as default if it's meant to increment
      step = 1;
    } else {
      // assign -1 as default if it's meant to decrement
      step = -1;
    }
  }
  // loop for increment
  if (start < end) {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  // loop for decrement
  } else if (start > end) {
    for (var i = start; i >= end; i += step) {
      result.push(i);
    }
    return result;
  }
}



