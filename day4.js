// let eDetails = {
//     eName: "Sathiyavani",
//     eId: "TYP1565",
//     eSal: 1000000,
//     eCompany: "TYSS",
//     eAddress: {
//         area: "MG Road",
//         pincode:600001
//     }
// }
// console.log(eDetails);//{eName: 'Sathiyavani', eId: 'TYP1565', eSal: 200000, eCompany: 'TYSS'}
// console.log(eDetails.eSal);//1000000
// eDetails.ePlace = "Bangalore";
// console.log(eDetails);//{eName: 'Sathiyavani', eId: 'TYP1565', eSal: 1000000, eCompany: 'TYSS', ePlace: 'Bangalore'}
// console.log(eDetails.eAddress);//{area: 'MG Road', pincode: 600001}
// console.log(eDetails.area);//undefined
// console.log(eDetails.eAddress.pincode);//600001

//
// let eDetails = [
//   {
//     eName: "Sathiyavani",
//     eId: "TYP1565",
//     eSal: 1000000,
//     eCompany: "TYSS",
//     eAddress: {
//       area: "MG Road",
//       pincode: 600001,
//     },
//   },
//   {
//     eName: "RoseApple",
//     eId: "TYP1564",
//     eSal: 1000000,
//     eCompany: "TYSS",
//   }
// ];
    
// console.log(eDetails);//
// console.log(eDetails[1]);//{eName: 'RoseApple', eId: 'TYP1564', eSal: 1000000, eCompany: 'TYSS'}
// console.log(eDetails[0]);//{eName: 'Sathiyavani', eId: 'TYP1565', eSal: 1000000, eCompany: 'TYSS', eAddress: {…}}
// console.log(eDetails[0].eName);//Sathiyavani
// eDetails[1].place = "Erode"
// console.log(eDetails);
// console.log(eDetails[1].place);


// let Rname = eDetails[0].eName;
// console.log(Rname);
// let Rname1 = Rname.split("").reverse().join("");
// console.log(Rname1);//inavayihtaS

// let Sname = eDetails[1].eName;
// console.log(Sname);
// let Sname1 = Sname.split("").reverse().join("");
// console.log(Sname1);//elppAesoR

//
//  let eDetails = {
//     eName: "Sathiyavani",
//     eId: "TYP1565",
//     eSal: 1000000,
//     eCompany: "TYSS",
//     eAddress: {
//         area: "MG Road",
//         pincode:600001
//     }
// }

// for (let x in eDetails)
// {
//     console.log(x);
// }

//
//  let eDetails = [
//   {
//     eName: "Sathiyavani",
//     eId: "TYP1565",
//     eSal: 1000000,
//     eCompany: "TYSS",
//     eAddress: {
//       area: "MG Road",
//       pincode: 600001,
//     },
//   },
//   {
//     eName: "RoseApple",
//     eId: "TYP1564",
//     eSal: 1000000,
//     eCompany: "TYSS",
//   }
// ];
// //for in method
// for (let x in eDetails)
// {
//     console.log(x);
// }
// //for of method
// for (let y of eDetails)
// {
//     console.log(y);

// }
// //for each method
// eDetails.forEach((value, index) => {
//     console.log(value);
//     console.log(index);
//     console.log(value.eSal = "15000000");
//     console.log(eDetails);
// })


// let eDetails = {
//     eName: "Sathiyavani",
//     eId: "TYP1565",
//     eSal: 1000000,
//     eCompany: "TYSS",
//     eAddress: {
//         area: "MG Road",
//         pincode:600001
//     }
// }

// console.log(Object.keys(eDetails));//['eName', 'eId', 'eSal', 'eCompany', 'eAddress']
// console.log(Object.values(eDetails));//['Sathiyavani', 'TYP1565', 1000000, 'TYSS', {…}]
// console.log(Object.entries(eDetails));
// console.log(Object.entries(eDetails)[1]);//['eId', 'TYP1565']
// console.log(Object.entries(eDetails)[2][1]);//1000000

// console.log(Object.seal(eDetails));
// eDetails.eSal = 1500000
// console.log(eDetails);
// console.log(Object.freeze(eDetails));
// console.log(Object.isFrozen(eDetails));//true

//
function Student(sName, sId,sBranch) {
    this.sName = sName;
    this.sId = sId;
    this.sBranch = sBranch;
}
let S1 = new Student("Sathiyavani", 123)
console.log(S1);
// let S2 = new Student(,444)
// console.log(S2);//Syntax Error
let S3 = new Student(444)
console.log(S3);//Student {sName: 444, sId: undefined, sBranch: undefined}
let S4 = new Student("Rose",444);
console.log(S4);//Student {sName: 'Rose', sId: 444, sBranch: undefined}
// let S5 = new Student("Apple",, "JS")
// console.log(S5);//Syntax Error
