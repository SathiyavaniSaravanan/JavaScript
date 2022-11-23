//Object.create() Method
// let person = {
//     Pname: "Rose",
//     Pid: 123,
// }

// // let person1 = person;
// let person1 = Object.create(person);
// person1.place = "Bangalore";
// console.log(person1);
// console.log(person);
// // console.log(person1.Pname);
// // console.log(person==person1);
// console.log(Object.getOwnPropertyNames(person1));
// console.log(Object.keys(person1));

//Object.fromEntries() Method
let stu = [["name", "Rose"], ["Id", 1234]]
let stu1 = Object.fromEntries(stu)
console.log(stu1);

//Object.isExtensible() Method
// let emp = {
//     ename: "Apple",
//     eid:1235
// }
// console.log(Object.isExtensible(emp));
// Object.preventExtensions(emp);
// emp.eid =1233
// console.log(emp);
// console.log(Object.isExtensible(emp));

//