// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

//Solution 

function findUniq(arr) {
    const sorted = arr.sort()
    
    if(sorted[0] === sorted[1]){
      return sorted[sorted.length - 1]
    }
    
    if(sorted[sorted.length - 1] === sorted[sorted.length - 2]){
      return sorted[0]
    }
  }
  