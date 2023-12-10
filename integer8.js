
let x1 = Number(prompt("1-nuqtani kiriting"));
let y1 = Number(prompt("2-nuqtani kiriting"));
let x2 = Number(prompt("3-nuqtani kiriting"));
let y2 = Number(prompt("4-nuqtani kiriting"));
let x3 = Number(prompt("5-nuqtani kiriting"));
let y3 = Number(prompt("6-nuqtani kiriting"));
let a = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
let b = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
let c = Math.sqrt(Math.pow((x1 - x3), 2) + Math.pow((y1 - y3), 2));
let p = a+b+c;
let s = Math.sqrt(p/2*(p/2-a)*(p/2-b)*(p/2-c), 2)
console.log(`perimetri ${p} ga teng, yuzi esa ${s} ga teng`)
