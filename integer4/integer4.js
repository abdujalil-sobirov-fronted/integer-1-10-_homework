let a = Number(prompt("3 xonali son kiriting"))
let b = a%100;
let q = b%10;
let c = Math.floor(b/10)
let d = Math.floor(a/100)
console.log(`${c}${d}${q}`)