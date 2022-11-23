// example1
//let val = document.getElementById("color");
// val.addEventListener("change", () => {
//     let value = document.getElementById("color").value;
//     if (value == "red")
//     {
//         document.body.style.backgroundColor="red"
//     }
//     if (value == "blue") {
//       document.body.style.backgroundColor = "blue";
//     }
//     if (value == "yellow") {
//       document.body.style.backgroundColor = "yellow";
//     }
    
// })
//another method
// let val = document.getElementById("color");
// val.addEventListener("change", () => {
//     let value = document.getElementById("color").value;
//     if (value !== "select color") {
//         document.body.style.backgroundColor = value;
//     }
// })

//example2

let city1=document.getElementById("city");
    city1.addEventListener("change", () => {
    // let place = document.getElementById("city").value;
    if ( city1.value== "Bangkok")
    {
        document.body.style.backgroundImage =
          "url('https://media.nomadicmatt.com/2020/bangkoksafe.jpg')";
    }
    if (city1.value == "Chiang Mai") {
          document.body.style.backgroundImage =
            "url('https://wallpaperaccess.com/full/1375418.jpg')";
    }
    if (city1.value == "Phuket") {
          document.body.style.backgroundImage =
            "url('https://imgak.mmtcdn.com/seo/travel-guide/sites/default/files/styles/travel_guide/phuket-old-town.jpg')";
    }      
})

//example3
// let ele = document.getElementsByClassName("rainbowclr");
// let clr = Array.from(ele);
// // console.log(clr);
// clr.forEach((val) => {
//     console.log(val);
//     val.addEventListener("mouseover", () => {
//         // val.style.backgroundColor = val.innerHTML;
//         // val.style.backgroundColor = val.textContent;
//         val.style.backgroundColor = val.innerText;
//     })
// })
// clr.forEach(val1 => {
//   console.log(val1);
//   val1.addEventListener("mouseout", () => {
//     val1.style.backgroundColor = "initial";
//   });
// });
