let a;
a=5;
a=String(5)
document.write(a," ",typeof a)
let b=new String (Date())
console.log(b,typeof b);
let array=String((987654))
console.log(array.length,typeof array);

document.write("<br/>",Number("253.5"))
document.write("<br/>",Number(" "))
document.write("<br/>",Number(""))
document.write("<br/>",Number("5KRUSHI"))

let ne=55.3;
document.write("<br>",ne.toExponential())
document.write("<br>",ne.toExponential(2))
document.write("<br>",ne.toExponential(3))

let namfix=3083.65
document.write("<br>",namfix.toFixed())
document.write("<br>",namfix.toFixed(2))
document.write("<br>",namfix.toFixed(1))

let nc=2532.35
document.write("<br>",nc.toPrecision())
document.write("<br",nc.toPrecision(1))
document.write("<br>",nc.toPrecision(3))

document.write("<br/><br/>")

document.write("<br/>",Number.MAX_VALUE)
document.write("<br/>",Number.MIN_VALUE)
document.write("<br/>",Number.NEGATIVE_INFINITY)
document.write("<br/>",Number.POSITIVE_INFINITY)

document.write("<br/><br/>")

document.write("<br/>",parseInt("-444"))
document.write("<br/>",parseInt("+99"))
document.write("<br/>",parseInt("99955 5"))
document.write("<br/>",parseInt("krushi"))

document.write("<br/><br/>")

document.write("<br/>",parseFloat("-455.3666"))
document.write("<br/>",parseFloat("+91.55"))
document.write("<br/>",parseFloat("668.5 55 5"))
document.write("<br/>",parseFloat("krushi"))

document.write("<br/><br/>")

document.write("<br/>",new Date())
document.write("<br/>",new Date("2018-10-25"))
document.write("<br/>",new Date(7,8,9,))
document.write("<br/>",new Date("july 5,2002 11:44:04"))






