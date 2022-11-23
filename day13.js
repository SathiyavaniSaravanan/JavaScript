//setTimeout function
// setTimeout(() => {
//     document.write("I am a setTimeout Function")
// }, 5000);

//setInterval
// setInterval(() => {
//     document.write("I am a setInterval"+"<br>")
// }, 5000);

//Example for Promise using setInterval
// let p1 = new Promise((resolve, reject) => {
//     setInterval(()=> {
//         resolve("I am resolved")
//     },5000)
//     setInterval(() => {
//         reject("I am rejected")
//     },2000)//here it iterates only once even though we have used "setInterval" as Promise gives only one value
// });
// p1.then((success) => {
//     console.log(success);
// }).catch((error) => {
//     console.log(error);
// })

