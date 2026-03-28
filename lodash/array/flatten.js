//
// Cú pháp: _.flatten(array)
// Flatten an array a single level deep.
// Làm phẳng một mảng độ sâu một cấp.

const _ = require("lodash");

const arr = [1, [2, [3, [4]], 5]];
console.log(_.flatten(arr));
