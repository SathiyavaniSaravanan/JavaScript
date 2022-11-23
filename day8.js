
//queryselector
// let q = document.querySelector(".myclass1");
// console.log(q);
// let r = document.querySelector("div")
// console.log(r);


//queryselector All
// let a = document.querySelectorAll(".myclass1");
// console.log(a);
// console.log(Array.isArray(a));
// console.log(typeof a);
// let b = document.querySelectorAll("div")
// console.log(b);

//example
// let im = document.querySelector(".image")
// console.log(im);

// let img = document.querySelectorAll("img")
// console.log(img);
// img.forEach((val,ind)=> {
//     console.log(val);
//     console.log(ind);
// })

//onclick event
// function clickh() {
//     let span1 = document.getElementsByTagName("span");
//     span1[1].style.color = "yellow";
//     document.body.bgcolor = "red";
//     console.log("clicking");
// }

//onmouseover event
// function hoveron() {
//     let head1 = document.querySelector("h1")
//     head1.style.color="blue"
// }
//onmouseout event
// function hoverout() {
//   let head1 = document.querySelector("h1");
//   head1.style.color = "initial";
// }

//onmouseover and onmouseout using forEach function
// let ele = document.getElementsByClassName("myclass1");
// console.log(ele);
// let elem = Array.from(ele);
// elem.forEach((elements) => {
//     elements.onmouseover=function() {
//         elements.style.color = "orange"
//     }
// })
// elem.forEach(elements1 => {
//   elements1.onmouseout = function () {
//     elements1.style.color = "black";
//   }
// })

//example

let fruit = document.getElementById("frulist");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
li1.textContent = "Rose Apple";
li2.textContent = "Apple";
li3.textContent = "WaterMelon";
li4.textContent = "Orange";
li5.textContent = "Mango";

fruit.appendChild(li1);
fruit.appendChild(li2);
fruit.appendChild(li3);
fruit.appendChild(li4);
fruit.appendChild(li5);

document.body.append(fruit);
fruit.style.display="none"
fruit.addEventListener("click", () => {
    if (fruit.style.display = "none")
    {
        document.getElementById("frulist").style.display = "block";
        }
})

let head1 = document.createElement("h1");
head1.textContent = "Vegetables";
document.body.append(head1);
let veggie = document.createElement("ul");
veggie.innerHTML = `<li>Carrot</li><li>Beans</li><li>Beetroot</li><li>BitterGourd</li><li>Potato</li>`;
veggie.style.display = "none";
document.body.append(veggie);

head1.addEventListener("click", () => {
    veggie.style.display = "block";
})