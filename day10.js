//onkeyup event
// var keyD = document.getElementById("keyDown");
// keyD.onkeydown = function () {
//     console.log("triggered");
//     document.body.style.backgroundColor=""
// }

//example
// var key = document.getElementById("keyDown");
// key.onkeydown = function () {
//     console.log(key.value);
//     let store = document.getElementById("storing");
//     store.textContent = key.value;
//     document.body.append(store);
// }

//onkeydown event
// var keyU = document.getElementById("keyDown");
// keyU.onkeyup = function () {
//     console.log("not triggered");
// }


//example using prompt
// let n1 = prompt(Number("Enter n1:"));
// let n2 = prompt(Number("Enter n2:"));


// let add = document.createElement("button")
// add.textContent = "add";
// document.body.append(add);
// add.addEventListener("click", () => {
//     let add1 = document.createElement("div");
//     add1.innerHTML = Number(n1) + Number(n2);
//     document.body.append(add1);
//     console.log(add1);

// })

// let sub = document.createElement("button");
// sub.textContent = "sub";
// document.body.append(sub);
// sub.addEventListener("click", () => {
//     let sub1 = document.createElement("div");
//     sub1.innerHTML = Number(n1) - Number(n2);
//     document.body.append(sub1);
//     console.log(sub1);
    
// });

// let multi = document.createElement("button");
// multi.textContent = "multiply";
// document.body.append(multi);
// multi.addEventListener("click", () => {
//     let multi1 = document.createElement("div");
//     multi1.innerHTML = Number(n1) * Number(n2);
//     document.body.append(multi1);
// });

// let divi = document.createElement("button");
// divi.textContent = "divide";
// document.body.append(divi);
// divi.addEventListener("click", () => {
//     let divi1 = document.createElement("div");
//     divi1.innerHTML = Number(n1) / Number(n2);
//     document.body.append(divi1);
// });

//Math Object Methods
// console.log(Math.sqrt(4));
// console.log(Math.round(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.cbrt(27));

//Date Object Methods
// var todayDate = new Date();
console.log("Today's date is", todayDate);

console.log("Current date is", todayDate.getDate());
console.log("Current day is", todayDate.getDay());//output will be from 0-6
console.log("Current month is", todayDate.getMonth());//output will be from 0-11
console.log("Current hours is", todayDate.getHours());
console.log("Current minutes is", todayDate.getMinutes());
console.log("Current seconds is", todayDate.getSeconds());
console.log("Current milliseconds is", todayDate.getMilliseconds());
console.log("Current year is", todayDate.getFullYear());
