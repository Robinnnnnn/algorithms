// https://leetcode.com/problems/reverse-integer/

/* 
Given a 32-bit signed integer, reverse digits of an integer. 

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// find out if the number is negative or not
// checking the number is less than 0
// if it is , at a - sign to the returned number
// else return the number

//x.toString() -> "2342"
// split the number into an array []

var reverse = function (x) {
  let reverse = parseInt(x.toString().split("").reverse().join(""));
  if (x < 0) {
    return reverse * -1;
  } else {
    return reverse;
  }
};
