function findOutlier(integers){
    const evenNumbers = integers.filter(number => number % 2 === 0)
    const oddNumbers = integers.filter(number => number % 2 !== 0)
    
    return evenNumbers.length > oddNumbers.length ? oddNumbers[0] : evenNumbers[0]
  }