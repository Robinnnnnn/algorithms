/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.


Input: s = "abcdefg", k = 2
Output: "bacdfeg"
*/

let example = "abcdefg";

var reverseStr = function (s, k) {
  let arr = s.split("");
  let len = arr.length;
  let l = 2 * k;
  let returnArr = [];
  //for ever l letters, reverse the first k letters

  // if less than k letters reverse all
  //else if less than 2k but > k reverse the first k

  for (let i = 0; i < len; i = i + l) {
    let new1 = [];
    let sub1 = arr.slice(i, i + l); //[a, b, c, d]
    debugger;
    if (sub1.length < k) {
      returnArr.push(sub1.reverse().join(""));
    } else if (sub1.length < l && sub1.length > k) {
      new1.push(sub1.slice(0, k).reverse().join("")); //fe
      new1.push(sub1.slice(k).join("")); //g
      returnArr.push(new1.join(""));
    } else {
      new1.push(sub1.slice(0, k).reverse().join("")); // ba
      new1.push(sub1.slice(k, k + k).join("")); // cd
      returnArr.push(new1.join(""));
    }
  }

  return returnArr.join("");
};
