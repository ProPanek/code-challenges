// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// Solution

function rgb(r, g, b){
    let first = Math.min(255, Math.max(0, r)).toString(16)
    let second = Math.min(255, Math.max(0,g)).toString(16)
    let third = Math.min(255, Math.max(0,b)).toString(16)
    
    if(first.length === 1){
      first = "0" + first
    }
     if(second.length === 1){
      second = "0" + second
    }
     if(third.length === 1){
      third = "0" + third
    }
    
    return (first + second + third).toUpperCase()
  }