/*Write a function that takes a Binary Search Tree and a target integer value and returns the closest value to that target value contained in the BST */

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = Infinity;
  return helper(tree, target, closest);
}

function helper(node, target, closest) {
  //base case
  if (node === null) {
    return closest;
  }
  //if we find a duplicate of target we cant get any closer
  if (node.value === target) {
    return node.value;
  }
  let distance = Math.abs(node.value - target);
  if (distance < Math.abs(closest - target)) {
    closest = node.value;
  }
  if (target < node.value) {
    return helper(node.left, target, closest);
  } else if (target > node.value) {
    return helper(node.right, target, closest);
  }
}
