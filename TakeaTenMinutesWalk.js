// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

// Solution 

function isValidWalk(walk) {
    let obj_steps = {
      "n": 0,
      "s": 0,
      "e": 0,
      "w": 0
    }
    
    for (const direction in obj_steps) {
      obj_steps[direction] = walk.filter(value => direction === value).length
    }
    
    if (Object.values(obj_steps).reduce((acc, array) => acc + array, 0) !== 10){
      return false
    }
    
    return obj_steps["n"] === obj_steps["s"] && obj_steps["w"] === obj_steps["e"] ? true : false
  }
  