// Chuyển Obj/Map/Set thành mảng cặp key-value
// Cú pháp: _.toPairs(object)
// Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.
// Tạo một mảng các cặp key-value có khóa là chuỗi có thể liệt kê được cho đối tượng có thể được sử dụng bởi _.fromPairs. Nếu đối tượng là một map hoặc set, các mục của nó sẽ được trả về.

const _ = require("lodash");

const object = { a: 1, b: 2, c: 4 };
console.log(_.toPairs(object)); // [['a', 1], ['b', 2]]
console.log(_.entries(object)); // [['a', 1], ['b', 2]]

const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(_.toPairs(map)); // [['a', 1], ['b', 2]]
console.log(_.entries(map)); // [['a', 1], ['b', 2]]

const set = new Set();
set.add(1);
set.add(2);
console.log(_.toPairs(set)); // [[1, 1], [2, 2]]
console.log(_.entries(set)); // [[1, 1], [2, 2]]
