depthFirstSearch(array) {
  // Write your code here.
  
  array.push(this.name);
  
  // defined recursive function
  function recurse(child){
    if(!child){
      return;
    }
    
    array.push(child.name);
    
    
    if(child.children.length > 0){
      child.children.forEach(nChildren => {
        recurse(nChildren);
      })
    }
  }
  
  //invocation
  this.children.forEach(child => {
    recurse(child);
  });
  
  return array;
}
