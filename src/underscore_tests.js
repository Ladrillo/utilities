/*jshint eqnull:true, expr:true*/

var _ = {};

(function () {

    /**
     * COLLECTIONS
     * ===========
     *
     * In this section, we'll have a look at functions that operate on collections
     * of values; in JavaScript, a 'collection' is something that can contain a
     * number of values--either an array or an object.
     */

    // Return an array of the first n elements of an array. If n is undefined,
    // return just the first element.
    _.first = function (array, n) {
        if (n === undefined) return array[0];
        return array.slice(0, n);
    };

    // Like first, but for the last elements. If n is undefined, return just the
    // last element.
    _.last = function (array, n) {
        if (n === undefined) {
            return array[array.length - 1];
        }
        else if (n > array.length) {
            return array;
        }
        return array.slice(array.length - n);
    };

    // Call iterator(value, key, collection) for each element of collection.
    // Accepts both arrays and objects.
    _.each = function (collection, iterator) {
        for (var i in collection) {
            iterator(collection[i], i, collection);
        }
    };

    // Returns the index at which value can be found in the array, or -1 if value
    // is not present in the array.
    _.indexOf = function (array, target) {
        var i = 0;
        for (i; i < array.length; i += 1) {
            if (array[i] === target) return i;
        }
        return -1;
    };

    // Return all elements of an array that pass a truth test.
    _.filter = function (collection, iterator) {
        var truthyElements = [], i = 0;
        for (i; i < collection.length; i += 1) {
            if (iterator(collection[i])) {
                truthyElements.push(collection[i]);
            }
        }
        return truthyElements;
    };

    // Return all elements of an array that don't pass a truth test.
    _.reject = function (collection, iterator) {
        var falsyElements = [], i = 0;
        for (i; i < collection.length; i += 1) {
            if (!iterator(collection[i])) {
                falsyElements.push(collection[i]);
            }
        }
        return falsyElements;
    };

    // Produce a duplicate-free version of the array.
    _.uniq = function (array) {
        var size = array.length, a = 0, i;
        for (a; a < size; a++) {
            for (i = a + 1; i < size; i++) {
                if (array[i] === array[a]) {
                    array.splice(i, 1);
                }
            }
        }
        return array;
    };


    // Return the results of applying an iterator to each element.
    _.map = function (array, iterator) {
        var mapped = [];
        array.forEach(function (elem) { mapped.push(iterator(elem)); });
        return mapped;
    };

    // Takes an array of objects and returns an array of the values of
    // a certain property in it. E.g. take an array of people and return
    // an array of just their ages
    _.pluck = function (array, propertyName) {
        var values = [], k;
        array.forEach(function (o) {
            for (k in o) {
                if (k === propertyName) values.push(o[k]);
            }
        });
        return values;
    };

    // Calls the method named by methodName on each value in the list.
    _.invoke = function (list, methodName, args) {
        var result = [];
        list.forEach(function (elem) {
            if (typeof methodName === 'function') {
                result.push(methodName.apply(elem, args));
            }
            else {
                result.push(elem[methodName]());
            }
        });
        return result;
    };

    // Reduces an array or object to a single value by repetitively calling
    // iterator(previousValue, item) for each item. previousValue should be
    // the return value of the previous iterator call.
    _.reduce = function (collection, iterator, initialValue) {
        var accumulator = initialValue || 0;
        if (collection.length === 0) return accumulator;
        return _.reduce(
            collection.slice(1),
            iterator,
            iterator(collection[0], accumulator)
            );
    };

    // Determine if the array or object contains a given value (using `===`).
    _.contains = function (collection, target) {
        var i;
        for (i in collection) {
            if (collection[i] === target) return true;
        }
        return false;
    };

    // Determine whether all of the elements match a truth test.
    _.every = function (collection, iterator) {
        if (collection.length && iterator) {
            for (var e in collection) {
                if ((collection[e]) === false) return false;
                else if (!(iterator(collection[e]))) return false;
            }
            return true;
        }
        return true;
    };

    // Determine whether any of the elements pass a truth test. If no iterator is
    // provided, provide a default one
    _.some = function (collection, iterator) {
        var i, it = iterator || function (e) { return !!e; };
        for (i in collection) {
            if (it(collection[i])) {
                return true;
            }
        }
        return false;
    };



    /**
     * OBJECTS
     * =======
     *
     * In this section, we'll look at a couple of helpers for merging objects.
     */

    // Extend a given object with all the properties of the passed in
    // object(s).
    _.extend = function (obj) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var k in o) {
                obj[k] = o[k];
            }
        }
        return obj;
    };


    // Like extend, but doesn't ever overwrite a key that already
    // exists in obj
    _.defaults = function (obj) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var k in o) {
                if (!(k in obj)) obj[k] = o[k];
            }
        }
        return obj;
    };


    /**
     * FUNCTIONS
     * =========
     */

    // Return a function that can be called at most one time. Subsequent calls
    // should return the previously returned value.
    _.once = function (func) {
        return (function () {
            var num = 1;
            return function () {
                if (num > 0) {
                    num -= 1;
                    return func();
                }
            };
        } ());
    };

    // Memoize an expensive function by storing its results. You may assume
    // that the function takes only one argument and that it is a primitive.
    //
    // Memoize should return a function that when called, will check if it has
    // already computed the result for the given argument and return that value
    // instead if possible.
    _.memoize = function (func) {
        return (function () {
            var memo = {};
            return function (n) {
                if (n in memo) {
                    return memo[n];
                }
                memo[n] = func(n);
                return memo[n];
            };
        } ());
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    //
    // The arguments for the original function are passed after the wait
    // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
    // call someFunction('a', 'b') after 500ms
    _.delay = function (func, wait) {

    };



    // Shuffle an array.
    _.shuffle = function (array) {
    };

    // Sort the object's values by a criterion produced by an iterator.
    // If iterator is a string, sort objects by that property with the name
    // of that string. For example, _.sortBy(people, 'name') should sort
    // an array of people by their name.
    _.sortBy = function (collection, iterator) {
    };

    // Zip together two or more arrays with elements of the same index
    // going together.
    //
    // Example:
    // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
    _.zip = function () {
        var args = [], result = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        var longest = args.reduce(function (acc, e, i, arr) {
            if (e.length > acc.length) return e;
            return acc;
        });
        var index = 0;
        for (i = 0; i < longest.length; i++) {
            var zipped = [];
            for (var e = 0; e < args.length; e++) {
                zipped.push(args[e][index]);
            }
            result.push(zipped);
            index++;
        }
        return result;
    };

    // Takes a multidimensional array and converts it to a one-dimensional array.
    // The new array should contain all elements of the multidimensional array.
    _.flatten = function (nestedArray, result) {
        if (typeof nestedArray !== "object") {
            return nestedArray;
        }
        else if (typeof nestedArray === "object" && nestedArray.length === 1) {
            return _.flatten(nestedArray[0]);
        }
        else {
            return [].concat(_.flatten(nestedArray[0]), _.flatten(nestedArray.slice(1)));
        }
    };

    // Takes an arbitrary number of arrays and produces an array that contains
    // every item shared between all the passed-in arrays.
    _.intersection = function () {
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
    };
    
}).call(this);
