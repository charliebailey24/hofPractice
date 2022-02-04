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
  // create result array
  // iterate over fruits using _.each
    // push current item to result
  // return result
  var result = [];
  _.each(fruits, function(fruit) {
    result.push(fruit);
  });
  return result;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  // create a result array
  // iterate over numbers using _.each
    // if current number modulo 5 is 0
      // push current number to result
  // return result array
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
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
  // return a call to _.filter passing in fruits
    // if the current fruit is the targetFruit
      // return the current fruit
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  // return a call to _.filter passing in fruits
    // if the current fruit first letter equals the target letter
      // return current fruit
  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  // return a call to filter passing in desserts array
    // if the current dessert type is cookie
      // return the current dessert
  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  // return a call to reduce passing in products, an iterator, and a total accumulator
    // return total plus current product price
  return _.reduce(products, function(total, product) {
    return total + Number(product.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  // return a call to reduce passing in desserts, an iteratee, and a count object
    // if countObj at current dessert type is undefined
      // return countObj at current dessert type set to 1
    // return countObj at current dessert type incremented by 1
  return _.reduce(desserts, function(counts, dessert) {
    if (counts[dessert.type] === undefined) {
      counts[dessert.type] = 1;
      return counts;
    }
    counts[dessert.type]++;
    return counts;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // releaseYear
  // return a call to reduce passing in movies, an iteratee, and an array memo
    // if the current movie releaseYear is between 1990 and 2000
      // push the movie to the memo array
    // return memo array
  return _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // runtime
  // return a call to reduce passing in movies, an iteratee, and a bool value memo
    // if the current movie runtime is less than timeLimit
      // set memo to true
    // return memo
  return _.reduce(movies, function(memo, movie) {
    if (movie.runtime < timeLimit) {
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
  // return a call to map passing in fruits and an iteratee
    // return current fruit convered to uppercase
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  // ingredients --> 'flour'
  // return a call to map passing in desserts and an iteratee
    // create new glutenFree property
    // if current dessert ingredents includes flour
      // set glutenFree to false
    // otherwise
      // set glutenFree to true
  return _.map(desserts, function(dessert) {
    dessert.glutenFree = !dessert.ingredients.includes('flour');
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
  // return a call to map passing in groceries and an iteratee
    // create centsPrice set to item at price with $ sliced off and converted to a number, times 100
    // add to $ salePrice property to item set to centsPrice times 1 - coupon divided by 100
    // return item
  return _.map(groceries, function(item) {
    var price = Number(item.price.slice(1));
    var salePrice = Math.round(((price * (1 - coupon)) + Number.EPSILON) * 100) / 100;
    item.salePrice = '$' + salePrice;
    return item;
  });
};
