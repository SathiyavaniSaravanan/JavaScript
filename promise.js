// let promises = new Promise((resolve, reject) => {
//     let istheroomiscleanedornot = false;
//     if (istheroomiscleanedornot) {
//         resolve("Yes the room is cleaned...Thank You")//fulfilled or success state
//     }
//     else
//     {
//         reject("No, the room is not cleaned...Please inform aunty to clean the room")//rejected or failure state
//     }
// })
// console.log(promises);//Promise {<rejected>: 'No, the room is not cleaned...Please inform aunty to clean the room'}

//Promise is having 3 states
//1:Pending State
//2:Fulfilled State
//3:Rejected State

//Promise instance methods
// Promise.prototype.then(()=>{});
// Promise.prototype.catch(() => { });
// Promise.prototype.finally(() => { });

// promises.then((cleaned) => {
//     console.log(cleaned);
//     document.write(cleaned);
// })

// promises.catch((err) => {
//     console.log(err);
//     document.write(err);
// })

// promises.finally((_) => {
//     console.log("worked");
// })

//example2
// function checkMail() {
//     return new Promise((resolve, reject)=> {
//         if (Math.random() > 0.5) {
//             resolve("The mail has been arrived")
//         }
//         else {
//             reject("Something went wrong")
//         }
//     })
// }
// checkMail()
//     .then((Success) => {
//     console.log(Success);
//     })
//     .catch((err) => {
//     console.log(err);
//     })
//     .finally(_ => {
//     console.log("Mail has been sent");
//     })

//example3
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am first");
        
//     }, 5000);
//     setTimeout(() => {
//         reject("Oops I am late");
//     },10000 );
// })
// promise1.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//Promise Static Methods
//Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()
// Promise.resolve()
// Promise.reject()

//example for static methods
//example1
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am a promise1 success block")
//     }, 1000);
// })
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am a promise2 success block");
//   }, 1000);
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I am a promise3 failure block");
//   }, 1000);
// });
// Promise.all([promise1, promise2, promise3]).then((data) => {
//     console.log(data);//It will return array of values
// }).catch((err) => {
//     console.log(err);
// })

//example2
let promiseforLunch1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Class is completed")
    }, 5000);
    
})
let promiseforLunch2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("All completed the given Task")
    }, 5000);
  
});
let promiseforLunch3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("You can go for Lunch")
    }, 5000);
});
// Promise.all([promiseforLunch1, promiseforLunch2, promiseforLunch3]).then((finished) => {
//     console.log(finished);
// }).catch((err) => {
//     console.log(err);
// })

Promise.any([promiseforLunch1, promiseforLunch2, promiseforLunch3])
  .then(finished => {
    console.log(finished);
  })
  .catch(err => {
    console.log(err);
  });

  