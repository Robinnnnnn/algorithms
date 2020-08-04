/* Given 2 arrays, write a function that determines whether the second array is a subsequence of the first one */

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == sequence[seqCount]) {
      seqCount++;
    }
    if (seqCount == sequence.length) {
      return true;
    }
  }
  return false;
}
