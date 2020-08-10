/* Get the nth element in a fibonacci sequence, use recursion */

function getNthFib(n) {
  // Write your code here.

  // if n = 0 return 0
  // if n is 1 or 2 return 1;

  // if n == array.length -1  return the last element of the array

  // if the arrays length < n
  // push to an array the sum at ([arr.length-1] - 1) and ([arr.length-1] - 2)
  let store = [0, 1];
  if (n === 1) return 0;
  if (n === 2) return 1;

  return recurse(n, store);
}

function recurse(n, arr) {
  if (n == arr.length) return arr[arr.length - 1];
  if (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return recurse(n, arr);
  }
}
