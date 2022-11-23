//arrow function
// function test() {
//     console.log("hi");
// }
// test();

//1st method
// let test = () => console.log("hi")
// test();

//2nd method
// let test = ()=>{
//     console.log("hi");
//     console.log("bye");
// }
// test();

//3rd method
// let test = (a) => {
//     return a;
// }
// console.log(test(6));

//example
// let func = () => {
//     console.log("I am an Arrow Function");
//     let innerFunc = (x) => {
//         return x;
//     }
//     console.log(innerFunc(5));
// }
// func();

//example2
// let func = () => {
//   console.log("I am an Arrow Function");
//   let innerFunc = (x) => {
//     console.log(x);
//     }
//     // innerFunc(7)
// }
// func()(7);

 function func(){
  console.log("I am an Arrow Function");
  function innerFunc(x){
    console.log(x);
     }
     return innerFunc;
}
func()(7)

//
let arr = [1, 2, 3, 4, 5, 6]
//  arr.filter((m)=>{
//     // console.log(m);
//     if (m > 3)
//     {
//         console.log(m);
//         }
// })

//filter method
console.log(arr.filter(m => { return m > 2 }));

//map method
console.log(arr.map(m => { return m + 2 }));

//Rest Parameter and Spread Operator
let array = [1, 2, 3, 4, 5, 6]
let [...array1] = arr;
console.log(array1);