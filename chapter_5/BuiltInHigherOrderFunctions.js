//filtering an array

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            passed.push(array[i]);
        }
        return passed;
    }
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (n) {
    return n % 2 == 0;
});

//Transforming with MAP

/*say, we have an array of objects, representing people, but we want an array of names that is much easier to read
 * the map method transforms the array by applying a function to all the elements of an array and making a new array from the retuned values
 * The New Array will have the same length as the original array, just its elements would be mapped to a new form by the function.
  */

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++) {
        mapped.push(transform(array.length));
    }
    return mapped;
}
var ancestory = [];
var overNinety = ancestory.filter(function (person) {
    return person.born - person.died > 90;
})

console.log(map(overNinety, function (person) { return person.name; }));

//Summarizing with Reduce 

/* Another common computation on Arrays is computing a single value from them.
 * The Higher Order function that represents this functionality is called the Reduce/Fold Function
 * you can think of this a folding of array, one element at a time , while summarizing, you'd start with the zero element and combine it with the next element according to a combining function until you're left with a single result
 */

function reduce(array,combine,start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;

}

console.log(reduce([1, 2, 3, 4, 5, 6, 7], function (a, b) { return a + b }, 0));