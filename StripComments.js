//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

//Solution

function solution(input, markers) {
    const final = []
    input.split("\n").map(element=>{
      if(element.split(markers[0]).length === 1){
        final.push(element.split(markers[1])[0])
      } else if (element.split(markers[1]).length === 1) {
        final.push(element.split(markers[0])[0])
      }
    })
  
    return final.map(str => str.trim()).join("\n")
  };