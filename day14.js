//this keyword
// function f1() {
//     console.log(this);//holds the address of window object
// }
// f1();//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//
// let obj = {
//     prop1:"hello",
//     m1:function () {
//         console.log(this);//holds the reference of the current object
//     }
// }
// obj.m1();//{prop1: 'hello', m1: ƒ}
// console.log(obj);//{prop1: 'hello', m1: ƒ}

//
// let obj1 = {
//     key1: "Hi",
//     demo: () => {
//         console.log(this);//'this' keyword in object using ARROW Function, then 'this' holds the reference of window object
//     }
// }
// obj1.demo();//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//
// let emp1 = {
//     eId: 123,
//     eName: "Sathiyavani",
//     eSal: 50000,
//     display: function () {
//         console.log(this.eName);//access the properties of current object
//     }
// }
// emp1.display();//we can use members of an object inside object method only with the help of 'this' keyword

//
// let c1 = {
//     i: 10,
//     f3: function () {
//         let i = 20;
//         console.log(i);//20//local member of function is executed
//     }
    
// }
// c1.f3();

//
// var i2 = 50;
// let c3 = {
//     i2: 10,
//     test: function () {
//         console.log(window.i2);//50//refers to window object
//         console.log(i2);//50//lexical scope
//         console.log(this.i2);//10
//     }

// }
// c3.test();

