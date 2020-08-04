/*
 Write a function that takes in a Binary Search Tree and returns a list of its branch sums ordered from leftmost branch sum to the rightmost branch sum.

                  1
                /  \
                2   3
              /\    /\
             4 5    6 7 
            /\ /   
          8  9 10

    return [15, 16, 18, 10, 11]

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let list = [];
  recurse(root, 0, list);
  return list;
}

function recurse(node, runningSum, listOfSums) {
  if (!node) {
    return;
  }

  runningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    listOfSums.push(runningSum);
    return;
  }

  recurse(node.left, runningSum, listOfSums);
  recurse(node.right, runningSum, listOfSums);
}
