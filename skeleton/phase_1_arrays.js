Array.prototype.uniq = function(){
  const isUniq = {}
  this.forEach(function(num){
    if (isUniq[num] === undefined){
      isUniq[num] = true;
    } else {
      isUniq[num] = false;
    }
  });
  const uniq = []
  Object.keys(isUniq).forEach(function(key){
    if (isUniq[key] === true) uniq.push(key);
  });
  return uniq
}

//another way, throw everything into a set and turn into an array


// just going to nested loop through this one
Array.prototype.twoSum = function(){
  const pairs = []
  for(let i = 0; i < this.length - 1; i++){
    for(let j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0) pairs.push([i,j]); 
    }
  }
  return pairs
}
/*try greedy approach
make hash with numbers as keys and indexes as values
{1:0 , 2:1, -1:2, -2:3 }
[1,2,-1,-2]
*/
Array.prototype.betterTwoSum = function(){
  const hash = {}
  const result = []
  for(let i = 0; i < this.length; i++){
    if (hash[-this[i]] !== undefined){
      hash[-this[i]].forEach(function(index){
        result.push([index, i]);
      });
    } 
    if (hash[this[i]] === undefined){
      hash[this[i]] = [i]
    } else {
      hash[this[i]].push(i)
    }
  }
  return result
} 

Array.prototype.transpose = function(){
  const result = []
  for(let i = 0; i < this[0].length; i++) result[i] = [];

  this.forEach(function(row){
    for (let i = 0; i < row.length; i++) result[i].push(row[i]);
  });
  return result;
}





