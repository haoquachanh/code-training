// Chuyển ngược từ mảng [[key, value], ...] thành đối tượng {key: value, ...}
// Cú pháp: _.fromPairs(pairs)
// The inverse of _.toPairs; this method returns an object composed from key-value pairs.
// Ngược lại với _.toPairs; phương thức này trả về một đối tượng đucợ tạo thành từ các cặp key-value.

const _ = require("lodash");

const pairs = [
  ["a", 1],
  ["b", 2],
];
console.log(_.fromPairs(pairs)); // { a: 1, b: 2 }
console.log(_.toPairs(pairs)); // [["a", 1], ["b", 2]]
