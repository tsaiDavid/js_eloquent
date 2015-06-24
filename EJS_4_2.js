// write a reverseArray function
// takes array as argument
// produces a new array that has same elements in the inverse

function reverseArray(array) {
  var result = [];
  // use a for loop to decrement backwards
  for (var i = array.length - 1; i >= 0; i--){
    // within loop, push to result
    result.push(array[i]);
  }
return result;
}

function reverseArrayInPlace(array) {
  // temp created to store array element
  var temp;
  // for loop stops at halfpoint since in place swap done
  for (var i = 0; i < array.length/2; i++) {
    // temp housing array element
    temp = array[i];
    // that element will then take value of the end
    array[i] = array[array.length - i - 1];
    // that later element will then take the first
    array[array.length - i - 1] = temp;
  }
  // you can return the original array
  return array;
}

