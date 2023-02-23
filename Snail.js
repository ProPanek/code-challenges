//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

//Solution

snail = function(array) {
    let result = [];
    while (array.length > 0) {
      // Move right
      result = result.concat(array.shift());
      // Move down
      for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
      }
      // Move left
      if (array.length > 0) {
        result = result.concat(array.pop().reverse());
      }
      // Move up
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length > 0) {
          result.push(array[i].shift());
        }
      }
    }
    return result;
  }
    