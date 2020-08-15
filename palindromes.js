function isPalindrome(string) {
  // Write your code here.
  if (string === string.split("").reverse().join("")) {
    return true;
  }

  return false;
}

// more efficient
function isPalindrome(string) {
  // Write your code here.
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
