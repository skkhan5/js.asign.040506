 // chaptar 4 
// // // task 1
// // let variable1, variable2, variable3;

// // // task 2
// // let myVariable , _underscore , $dollar , camelCase , num123;

// // // task 3

// // //          illegal
// // //  speicail chatacters like @ # % &
// // //  num  like 1234
// // //  space are not use for variable
// // //  reserved key words like break var let funtion 

// // document.write("<h1>Rules for naming JS variables</h1>");
// // document.write("<p>Variable names can only contain letters, numbers, dollar signs ($), and underscores (_). For example: <strong>$my_1stVariable</strong></p>");
// // document.write("<p>Variables must begin with a letter, dollar sign ($), or underscore (_). For example: <strong>$name</strong>, <strong>_name</strong>, or <strong>name</strong></p>");
// // document.write("<p>Variable names are case sensitive.</p>");
// // document.write("<p>Variable names should not be JS reserved keywords.</p>");


// // chaptar 5 Q1

// // let a = +prompt("Enter first num" )
// // let b = +prompt("enter second num")
// // let c = (a + b)
// // document.write(`sum of ${a } and ${b} is ${c}`)
 

// // Q2

// let a1 = +prompt("Enter first num" )  
// let operator = prompt( " select opertaor (+ , - , / ,*)")
// let a2 = +prompt("enter second num")
// let plus = (a1 + a2);
// let minus = (a1 - a2);
// let multiply = ( a1 * a2);
// let divid = (a1 / a2) ;
// if(operator == "+")
//     {document.write(`plus ${a1} and ${a2} ans ${plus}`)
     
// }

// if(operator == "-")
//     {document.write(`minus ${a1} and ${a2} ans ${minus}`)

// }
// if(operator == "/")
//     {document.write(`divid ${a1} and ${a2} ans ${divid}`)


// }
//  if(operator == "*")
//     {document.write(`multiply ${a1} and ${a2} ans ${multiply}`)

// }
// // document.write(`plus ${a1} and ${a2} ans ${plus}`)
// // document.write(`minus ${a1} and ${a2} ans ${minus}`)
// // document.write(`multiply ${a1} and ${a2} ans ${multiply}`)
// // document.write(`divid ${a1} and ${a2} ans ${divid}`)

// // Q3

// let myVariable1

// document.write("Value after variable declaration is " + myVariable1 + "<br>")

// myVariable1 = 5;

// document.write("“Initial value:" + myVariable1 + "<br>")

// myVariable1++;

// document.write("Value after variable increment is " + myVariable1 + "<br>");

// myVariable1 += 7;

// document.write("Value after add 7 is " + myVariable1 +"<br>")

// myVariable1 --;

// document.write("“Value after decrement is" + myVariable1 + "<br>");

// let remaindar = myVariable1 % 3;

// document.write("“The remainder is " + remaindar + "<br>");


// // Q4

// let tkt = 600;
// let totalcost = tkt * 5;
// document.write("the cost of 5 tickets to a movies is " + totalcost+ "PKR" +"<br>");


// document.write("4 x 1 " + "=" + " " + 4 * 1 + "<br>")
// document.write("4 x 2 " + "=" + " " + 4 * 2 + "<br>")
// document.write("4 x 3 " + "=" + " " + 4 * 3 + "<br>")
// document.write("4 x 4 " + "=" + " " + 4 * 4 + "<br>")
// document.write("4 x 5 " + "=" + " " + 4 * 5 + "<br>")
// document.write("4 x 6 " + "=" + " " + 4 * 6 + "<br>")
// document.write("4 x 7 " + "=" + " " + 4 * 7 + "<br>")
// document.write("4 x 8 " + "=" + " " + 4 * 8 + "<br>")
// document.write("4 x 9 " + "=" + " " + 4 * 9 + "<br>")
// document.write("4 x 10 " + "=" + " " + 4 * 10 + "<br>")



// let priceOfitem1 = 650;
// let quintityOfitem1 = 3;
// let priceOfitem2 = 100;
// let quintityOfitem2 = 7;
// let shippingCharge = 100;

// totalcost = (priceOfitem1 * quintityOfitem1)+ (priceOfitem2 * quintityOfitem2) + shippingCharge;
// document.write("price of item 1 is "+ priceOfitem1 +"<br/>")
// document.write("quantity of item 1 is "+ quintityOfitem1+"<br/>" )
// document.write("price of item 2 is "+ priceOfitem2 +"<br/>")
// document.write("quantity of item 2 is "+ quintityOfitem2 +"<br/>")
// document.write("shipping charges is "+ shippingCharge +"<br/>")
// document.write("total cost is "+ totalcost +"<br/>")



// let totalmark = 980;
// let obtainedmark = 804;
// let persentage = (obtainedmark / totalmark) * 100;

// document.write("total mark " + totalmark + "<br/>" )
// document.write("obtained mark" + obtainedmark + "<br/>")
// document.write( "total persentage " + persentage.toFixed(10) + "<br/>")



// let dollar = 104.80;
// let riyal = 28;
// let dollarTopkr = 10
// let riyaltopkr = 25

// totalpkr = (dollar * dollarTopkr ) + (riyal * riyaltopkr)

// document.write("pkr dollar to riyal " + totalpkr )

// // Q10

// let num = 7;
// let resulte = ((num + 5)* 10)/ 2;
// console.log(resulte)


// Q11

// let currentYear = new Date().getFullYear();
// let dateofBirth = 1999;

// let age = currentYear - dateofBirth ;

// document.write(`currentYear is ${currentYear} and your birthday is ${dateofBirth} and your age is ${age}`) 


// Q13

let fvtsnack = "chocolate";
let currenrAge = 26 ;
let maxAge = 85 ;

let amountPerDAy = 2;

let yearRemaning = maxAge - currenrAge;
let totalamount = yearRemaning * 365 * amountPerDAy;

document.write(`Your Will Need ${totalamount} Chocolate Chip Last yYou Until Ripe Old age of ${maxAge} <br/> <h1>Baki Upar waly 12 question code uncommite kr ke chak kar lain <h1/>`)


// let yourName = prompt("")
// document.write(`Assala-mu-alikum ${yourName}`)


// let number = prompt("")
// number = number ? parseInt(number) : 5;
// document.write(`Table ${number} <br/>`)
// for(let i =1; i <=10 ; i++){
// document.write(`${number} x ${i} = ${number * i } <br/> `)
// }

// var a = 2, b = 1; 
// var result = --a - --b + ++b + b-- 
// b + 1
// console.log(result) 



let subject1 = prompt("Subject One ")
let subject2 = prompt("Subject Two")
let subject3 = prompt("Subject Three")

let eachMark = 100;

let obtainedMark1 = parseInt(prompt(`Aap ke Subject 1 Main ${subject1} ke Obtain Marks Enter krain.`))
let obtainedMark2 = parseInt(prompt(`Aap ke Subject 2 Main ${subject2} ke Obtain Marks Enter krain.`))
let obtainedMark3 = parseInt(prompt(`Aap ke Subject 3 Main ${subject3} ke Obtain Marks Enter krain.`));


let totalObtainedMark = obtainedMark1 + obtainedMark2 + obtainedMark3 ;

let totalEachMark = eachMark * 3;

let persentage = (totalObtainedMark / totalEachMark) * 100



document.write(` Total Mark ${totalEachMark} Obtained Mark ${totalObtainedMark}  and persentage ${persentage.toFixed(2)}`)
