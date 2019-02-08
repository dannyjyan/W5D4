Array.prototype.bubbleSort = function(){
  let result = this.slice();
  let sorted = false;
  while (!sorted){
    sorted = true; 
    result.forEach(function(element, index){
      if (index === result.length) return; //use return not continue for foreach
      if (element > result[index+1]){
        [result[index], result[index + 1]] = [result[index + 1], result[index]]
        sorted = false;
      }
    });
  }
  return result;
}

String.prototype.subStrings = function(){
  let result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i+1; j < this.length+1; j++){
      result.push(this.substring(i,j));
    }
  }
  return result;
}

