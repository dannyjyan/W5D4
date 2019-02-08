const range = function(start,end){
  result = []
  for(let i = start; i <= end; i++){
    result.push(i)
  }
  return result;
};

const sumRec = function(arr){
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return;
  return arr[0] + sumRec(arr.slice(1))
}

const exponent1 = function(base, exp){
  if (exp === 0) return 1;
  return base * exponent1(base, exp-1);
}

const exponent2 = function(base, exp){
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp % 2 === 0) return exponent2(base, exp/2) ** 2;
  if (exp % 2 === 1) return base * (exponent2(base, (exp-1) / 2) ** 2);
}

const fibonacci = function(n){
  if (n <= 0) return [];
  let result = [];
  const helper = function(n){
    if (n == 0) return result;
    if (result.length < 2){ 
      result.push(1);
    } else {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return helper(n-1)
  }
  helper(n);
  return result; 
}

function deepDup(arr){
  let value;
  let result = []
  for(let i = 0; i < arr.length; i++){
    // debugger
    value = arr[i]
    result[i] = (value instanceof Array) ? deepDup(value) : value;
  }
  return result;
}


function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++
    } else {
      result.push(right[j]);
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))

  // while (i < left.length) {
  //   result.push(left[i]);
  //   i++
  // }

  // while (j < right.length) {
  //   result.push(right[j]);
  //   j++
  // }
  // return result
}
