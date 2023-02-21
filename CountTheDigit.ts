//https://www.codewars.com/kata/566fc12495810954b1000030/train/typescript

//Solution

export class G964 {
    public static nbDig(n: number, d: number): number {
      return Array(n + 1).fill(0).map((_,i) => Math.pow(i, 2) ).join("").split("").filter(v => v === String(d)).length
   }
}