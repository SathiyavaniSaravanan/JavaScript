// console.log("start");
// var a = 10;
// a = 100;
// console.log(a);
// let b = 99;
// console.log(b);
// function x() {
//     console.log(a);
//     console.log(window.a);
//     console.log(b);
//     console.log(this.b);
// }
// x();

//example
// console.log("start");//start
// let a = "hello";
// var b = "hi";
// console.log(b);//hi
// function m() {
//     b = 777;
//     // console.log(c);//error
//     let c;
//     console.log(c);//undefined
//     c = 100;
//     console.log(c);//100
//     console.log(this.a);//undefined
//     console.log(a);//hello
//     console.log(b);//777
//     console.log(this.b);//777
//     var d = 1000;
//     console.log(d);
// }
// m();
// console.log("outside : "+this.d);
// console.log(d);//
// console.log(this.b);//777
// console.log("end");//end

//eg
// console.log("start");//start
// const c = 999;
// let b = 111;
// console.log(b);//111
// var x = "hello";
// function m() {
//     console.log(c);//999
//     console.log(this.b);//Undefined
//     b = 222;
//     console.log(b);//222
//     var x = "hi";
//     console.log(x);//hi
//     console.log(this.x);//hello
// }
// m();
// function n() {
//     x = "bye";
//     console.log(x);//bye
//     console.log(this.x);//bye
// }
// n();
// console.log(x);//bye
// console.log("end");//end

//eg
console.log("start");//start
let c;
var b;
c = 100;
b = 200;
console.log(c);//100
function x() {
    console.log(this.c);//Undefined
    console.log(this.b);//200
    b = 500;
    c = 333;
    var b = 700;
    console.log(b);//700
}
x();
function y() {
    console.log(c);//333
    c = 999;
    console.log(c);//999
}
y();
console.log("end");//end
