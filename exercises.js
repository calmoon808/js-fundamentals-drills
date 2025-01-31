/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;
function doubleArray(array){
  for(let i = 0, n = array.length; i < n; i++){
    array[i] *= 2;
  }
  return array;
}
/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;
function sumArrays(arr1, arr2){
  let sum = 0;
  for(let i = 0; i < arr1.length; i++){
    sum += arr1[i] + arr2[i];
  }
  return sum;
}
/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;
function stringCount(str){
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
function arrayLength(arr){
  return arr.length;
}
/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;
function countAll(arr){
  let sum = 0;
  for(let i = 0, n = arr.length; i < n; i++){
    sum += arr[i];
  }
  return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;
function countStrings(arr){
  let lengthArr = [];
  for(let i = 0, n = arr.length; i < n; i++){
    lengthArr.push(arr[i].length);
  }
  return lengthArr;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;
function countAllStrings(arr){
  let sum = 0;
  let sumStrArr = countStrings(arr);
  for(let i = 0, n = sumStrArr.length; i < n; i++){
    sum += sumStrArr[i];
  }
  return sum;
}
/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;
function convertToArray(obj){
  return Object.values(obj);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;
function objectSize(obj){
  let count = 0;
  for(let key in obj){
    count++;
  }
  return count;
}
/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;
function createZeroFilledArray(num){
  let arr = [];
  for(let i = 0; i < num; i++){
    arr.push(0);
  }
  return arr;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;
function poppedArray(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;
function splitString(str){
  return str.split('');
}
/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;
function lengthOfLast(arr){
  return arr.pop().length;
}
/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;
function sumBelowTen(arr){
  let sumOdd = 0;
  for(let i = 0, n = arr.length; i < n; i++){
    if(arr[i] < 10){
      sumOdd += arr[i];
    }
  }
  return sumOdd;
}
/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;
function moreThanTenLetters(arr){
  let count = 0;
  for(let i = 0, n = arr.length; i < n; i++){
    if(arr[i].length > 10){
      count += 1;
    }
  }
  return count;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;
function multiplyAll(arr){
  let product = 1;
  for(let i = 0, n = arr.length; i < n; i++){
    product *= arr[i];
  }
  return product;
}
/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;
function sumAllPositive(arr){
  let sum = 0;
  for(let i = 0, n = arr.length; i < n; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }
  }
  return sum;
}
/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;
function stringCountBelowThree(arr){
  let count = 0;
  for(let i = 0, n = arr.length; i < n; i++){
    if(arr[i].length <= 3){
      count += 1;
    }
  }
  return count;
}
/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;
function countObjects(arr){
  return arr.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;
function getObjectKeys(obj){
  return Object.keys(obj);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;
function getObjectValues(obj){
  return Object.values(obj);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;
function makeObject(key, value){
  let newObj = {};
  newObj[key] = value;
  return newObj
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;
function makeObjectReverse(key, value){
  let newObj = {};
  newObj[value] = key;
  return newObj
}
/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;
function tupleToObject(arr){
  let newObj = {};
  newObj[arr[0]] = arr[1];
  return newObj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;
function tupleToObjectReverse(arr){
  let newObj = {};
  newObj[arr[1]] = arr[0];
  return newObj;
}
/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;
function strToKeys(arr){
  let newObj = {};
  for(let i = 0, n = arr.length; i < n; i++){
    newObj[arr[i]] = 0;
  }
  return newObj;
}
/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;
function getValues(obj){
  return Object.values(obj);
}
/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;
function getKeys(obj){
  return Object.keys(obj);
}
/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;
function objectToArray(obj){
  let newArr = [];
  for(let key in obj){
    let arr = [key, obj[key]];
    newArr.push(arr);
  }
  return newArr;
}
/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;
function arrayToObject(arr){
  let obj = {};
  for(let i = 0, n = arr.length; i < n; i++){
    obj[arr[i]] = false;
  }
  return obj;
}
/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;
function arraysToObject(arr1, arr2){
  let obj = {};
  for(let i = 0, n = arr1.length; i < n; i++){
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}
/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;
function objectsToTuples(obj1, obj2){
  let newArr = [];
  let newObj = Object.assign({}, obj1, obj2);
  for(let key in newObj){
    let arr = [key, newObj[key]];
    newArr.push(arr);
  }
  return newArr;
}
/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;
function mapArrayValues(arr){
  let obj = {};
  for(let i = 0, n = arr.length; i < n; i++){
    obj[arr[i]] = true;
  }
  return obj;
}
/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;
function mapStringCounts(arr){
  let obj = {};
  for(let i = 0, n = arr.length; i < n; i++){
    if(arr[i].length >= 5){
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  return obj;
}
/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;
function arrayToObjectNums(arr){
  let obj = {};
  for(let i = 0, n = arr.length; i < n; i++){
    obj[arr[i]] = true;
  }
  return obj;
}
/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;
function stringToKeys(str){
  let obj = {};
  for(let char of str){
    obj[char] = true;
  }
  return obj;
}
/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;
function charCountMap(arr){
  let obj = {};
  for(let i of arr){
    obj[i] = i.length;
  }
  return obj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;
function frequencyMap(arr){
  let obj = {};
  for(let i of arr){
    if(!obj[i]){
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  return obj;
}
/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;
function tupleConvertToObject(arr){
  let obj = {};
  for(let i of arr){
    obj[i[0]] = i[1];
  }
  return obj;
}
module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject:tupleConvertToObject 
}