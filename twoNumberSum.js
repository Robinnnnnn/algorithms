/* A function that takes a non-empty array of integers and an integer of a target sum. Return 2 number in an array that reach the target sum*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let table = {};
  for (let i = 0; i < array.length; i++) {
    if (table[targetSum - array[i]]) {
      return [targetSum - array[i], array[i]];
    } else {
      table[array[i]] = true;
    }
  }
  return [];
}
