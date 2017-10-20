'use strict';

var total = [];
console.log('total:', total);

var system = ['a','b','c'];
console.log('system:', system);

var institute = ['x','y','z'];
console.log('institute:', institute);

var empty = [];
console.log('empty:', empty);

total = total.concat(system);
total = total.concat(institute);
total = total.concat(empty);
console.log('total:', total);





// [
//   {
//     "id": 1,
//     "textLayoutId": 1,
//     "backgroundId": 1,
//     "instituteId": null,
//     "uuid": null,
//     "thumbnail": null,
//     "active": true
//   },
//   {
//     "id": 2,
//     "textLayoutId": 2,
//     "backgroundId": 2,
//     "instituteId": null,
//     "uuid": null,
//     "thumbnail": null,
//     "active": true
//   },
//   {
//     "id": 3,
//     "textLayoutId": 1,
//     "backgroundId": 3,
//     "instituteId": null,
//     "uuid": null,
//     "thumbnail": null,
//     "active": true
//   }
// ]