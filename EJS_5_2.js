// Compute the average age difference between mothers and children
// Age of the mother when the child is born

/*
Compute the average age difference between mothers and children
Find the age of the mother when the child is born
Not all the mothers mentioned in the data are themselves present
Average age difference would be child's birth - mother's birth
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var filteredArray = hasMother(ancestry),
    ages = [];
filteredArray.forEach(function(personm){
  ages.push(person.born - byName[person.mother].born);
})

console.log(average(ages));

// → 31.2