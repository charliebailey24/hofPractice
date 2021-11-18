// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {

  // input: array of numbers
  // output: number of numbers that are a multiple of 5
  // constraints: none
  // edge cases: none

  // create count set to 0
  // call each passing in numbers array and iterator function
    // if current number modulo 5 is zero
      // increment count
  // return count

  var count = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count ++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  // input: array of fruits
  // output: target fruit as a string
  // constraints: none
  // edge cases: none

  // call filter on fruits array passing in iterator function
    // return current fruit equal to target fruit

  return _.filter(fruits, function(fruit, index, collection) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  // input: array of fruits and character
  // output: array of fruits with first char equal to letter char

  // return call to filter passing in fruits and iterator
    // return uppercase first char of current fruit equals letter

  return _.filter(fruits, function(fruit, index, collection) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  return _.filter(desserts, function(dessert, index, collection) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  // input: array of product objects
  // output: total price of all products as number

  // return reduce called on products, the iterator function and accumulator
    // create prices variabe set to product at price sliced from 1
    // convert price to num
    // return memo + price

  return _.reduce(products, function(memo, product) {
    var price = Number(product.price.slice(1));
    return memo + price;
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  // input: array of objects
  // output: object with counts of unique dessert types

  // return reduce called on desserts, the iterator function and memo obj
    // if memo does not have current dessert type count property
      // create property and set count to one
    // otherwise
      // increment count at property
    // return memo

  return _.reduce(desserts, function(memo, dessert) {
    if (!memo.hasOwnProperty(dessert.type)) {
      memo[dessert.type] = 1;
    } else {
      memo[dessert.type] ++;
    }
    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  // input: array of movie objects
  // output: array of titles of movies with release year between 1990 inclusive and 2000 exclusive

  // return reduce called on movies, an iterator function, and memo array
    // if current movie release year meets condition
      // push current movie title to memo
    // return memo

  return _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  // input: array of movie objects
  // output: boolean of condition

  // return reduce called on movies, iterator and memo
    // if current movie runtime is less than or equal to time limit
      // return memo equals true

  return _.reduce(movies, function(memo, movie) {
    if (movie.runtime <= timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  return _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  return _.map(groceries, function(item) {
    var price = Number(item.price.slice(1)) * 100;
    var calcSalePrice = ((price * (1 - coupon)) / 100).toFixed(2);
    item.salePrice = '$' + calcSalePrice;
    return item;
  });
};
