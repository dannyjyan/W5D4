
const mult = num => num*num; 

Array.prototype.myEach = function(callback){
  for(let i = 0; i < this.length; i++){
    this[i] = callback(this[i]);
  }
}

Array.prototype.myMap = function(callback){
  result = this.slice();
  result.myEach(callback);
  return result;
}

Array.prototype.myReduce = function(callback, initialValue=undefined){
  let result;
  let i = 0;
  if (initialValue === undefined){
    result = this[0];
    i++;
  } else {
    result = initialValue;
  }
  for( ; i < this.length; i++){
    // debugger
    result = callback(result, this[i]);
  }
  return result;
}