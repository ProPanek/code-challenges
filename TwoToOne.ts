//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/typescript

//Solution

export const longest = (s1:string, s2:string): string => {
    const array: string[] = []
    
    const addUniqueToArray = (value: string) => {
      value.split("").forEach(v => {
        if (!array.includes(v)){
          array.push(v)
        }
      })
    }
    
    addUniqueToArray(s1)
    addUniqueToArray(s2)
    return array.sort().join("")
  }