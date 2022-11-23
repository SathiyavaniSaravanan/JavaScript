//Closure
//example 1
// console.log("start");
// function x() {
//     var a = 10;
//     console.log(a);
//     let b;
//     function y() {
//         console.log(a);
//         console.log(b);
//     }
//     y()
// }
// x()

//example 2
// console.log("start");
// function x() {
//     var a = 10;
//     let b = 100;
//     console.log(a);
//     var m = 99;
//     function y() {
//         console.log(a);
//         var c;
//         console.log(c);
//         var b;
//         console.log(b);
//         console.log(m);
//         var n = 88;
//         console.log(n);
//     }
//     y()
// }
// x()
// console.log("end");

//example 3
// console.log("start");
// function f1() {
//     let a = 100;
//     a = 99;
//     console.log(a);
//     function f2() {
//         let b = 99;
//         console.log(a);
//         function f3() {
//             let c = 77;
//             console.log(c);
//             console.log(a);
//             console.log(b);
//         }
//         f3();
//     }
//     f2();
// }
// f1();
// console.log("end");

//example 4
console.log("start");
var a = "hi";
console.log(a);
function p() {
    console.log(a);
    var b = "hello";
    console.log(b);
    function q() {
        console.log(b);
        var c = "bye";
    }
    q()
}
p()
// console.log(c);//error
// console.log(b);//error
console.log(a);
function z() {
    let d = 999;
}
// console.log(d);//error
z()
console.log("end");