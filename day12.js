//De-Structuring using Rest Parameter
//for Object
// let obj = {
//     sName: "Sathiyavani",
//     sSal: 40000,
//     sId:1234
// }

// let { sName, ...x } = obj;
// console.log(x);//{sSal: 40000, sId: 1234}

// let { sName: g, sSal: h, sId: i } = obj;
// console.log(g);//Sathiyavani
// console.log(h);//40000
// console.log(i);//1234
// console.log(obj);//{sName: 'Sathiyavani', sSal: 40000, sId: 1234}

//for Array
// let arr = [1, 2, 3, 4, 5]
// let [a, b, ...c] = arr;
// console.log(c);//[3, 4, 5]

// let { a, b, ...c } = arr;
// console.log(a);//undefined
// console.log(b);//undefined
// console.log(c);//{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

// for function
// function y(p, q, ...r) {
//   console.log(p);
//   console.log(q);
//   console.log(r); //[3, 4, 5]
// }
// y(1,2,3,4,5)

//event Propagation
let gp = document.getElementById("grandparent");
let p = document.getElementById("parent");
let c = document.getElementById("child");

gp.addEventListener("click", e => {
  console.log("GrandParent Clicked");
      gp.style.backgroundColor = "Red";
      console.log(`Phase:${e.eventPhase}`)
})
p.addEventListener("click", (e) => {
    console.log("Parent Clicked");
    p.style.backgroundColor = "Yellow";
    console.log(`Phase:${e.eventPhase}`);
    e.stopPropagation();
})
c.addEventListener("click", (e) => {
    console.log("Child Clicked");
    c.style.backgroundColor = "Green";
    console.log(`Phase:${e.eventPhase}`);
})


