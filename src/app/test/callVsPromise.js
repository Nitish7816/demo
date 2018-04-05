//callback()
// first(2, function (firstResult,err) {
//   if(!err) {
//     console.log(firstResult);
//     second(firstResult, function (secondResult,err) {
//       if(!err) {
//         console.log(secondResult);
//         third(secondResult, function (thirdResult,err) {
//           if(!err) {
//             console.log(thirdResult);
//           }
//         });
//       }
//     });
//   }
// });
//
// function first(value,callback) {
//   callback(value+2,false);
// }
// function second(value,callback) {
//   callback(value+2,false);
// }
// function third(value,callback) {
//   callback(value+2,false);
// }

// var promise = new Promise(function (resolve,reject) {
//   resolve(2);
//
// });
// promise.then(function (response) {
//   console.log(response);
// })
// promise.then(first).then(second).then(third).then(function (response) {
//   console.log(response);
// });
// function first(value) {
//   return value + 2;
// }
// function second(value) {
//   return value + 2;
// }
// function third(value) {
//   return value + 2;
// }
const employee = [
  {name: 'abc', age: '21', phone: 1234},
  {name: 'xyz', age: '22', phone: 1234},
  {name: 'bbb', age: '18', phone: 1234},
  {name: 'aaa', age: '27', phone: 1234}
];
// const empName = this.employee.map(function (emp) {
//   console.log(emp.name);
// });
// const ag = this.employee.map(emp => {
//   console.log(emp.age);
// });
// var empname = employee.filter(emp => employee.name == 'aaa');
console.log(employee.name);

