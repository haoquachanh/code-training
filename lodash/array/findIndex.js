// Vị trí đầu tiên mà tìm thấy phần tử thỏa mãn điều kiện.
// Cú pháp: _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// This method is like _find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
// Phương thức này giống như _find ngoài trừ việc nó trả về chỉ số của phần tử đầu tiên mà predicate trả về giá trị đúng thay vì phần tử đó.

const _ = require("lodash");

const users = [
  { user: "A", active: false },
  { user: "B", active: false },
  { user: "C", active: true }, // index 2
  { user: "D", active: true },
];

console.log(_.findIndex(users, (o) => o.active === true)); // 2
console.log(_.findLastIndex(users, (o) => o.active === true)); // 3
