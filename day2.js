//filter method
// let arr = [10, 20, 30, 40, 50, 60]
// console.log(arr);
// // console.log(values);
// let filteredarray = arr.filter((values) => {
//     console.log(values);
//     if (values > 30)
//     {
//         console.log(values);//here it iterates the output values
//         return values;
//         }
// })
// console.log(filteredarray);//gives output as an array
// console.log(arr);

//map method
// let arr = [10, 20, 30, 40, 50, 60];
// let m = arr.map((x) => {
//     return x + 10;
// })
// console.log(m);
// console.log(arr);

//reduce method
// let arr = [10, 20, 30, 40, 50, 60];
// let r = arr.reduce((accumulator, values) => {
//     // console.log(accumulator);
//     return accumulator + values;
// },10)
// console.log(r);
// console.log(arr);

//example
// let clothes = [100, 200, 400, 700, 900];
// let filteredclothes = clothes.filter((val) => {
//     if (val > 400)
//     {
//         return val;
//         }
// })
// console.log(filteredclothes);// [700, 900]

// let mappedclothes = filteredclothes.map((val1) => {
//     return val1 + 50;
// })
// console.log(mappedclothes);//[750, 950]

// let totalprice = mappedclothes.reduce((accum, val2) => {
//     return accum + val2;
// })
// console.log(totalprice);//1700

//example2
// let masks = [20, 30, 45, 68, 100];
// let increase = masks.map((val) => {
//     return val+= val *(10 / 100);
// })
// console.log(increase);
// let total = increase.reduce((accum, val1) => {
//     return accum + val1;
//  })
// console.log(total);

//for of
// for (let p of masks)
// {
//   console.log((p += p * (10 / 100)));
// }

//for in
// for (let q in masks)
// {
//   console.log(q);
// }

//for each
// let m = masks.forEach((values,index) => {
//     console.log(values);
//     console.log(index);
// });

//to find an Armstrong Number

for (let i = 1; i < 300000; i++)
{
      
}