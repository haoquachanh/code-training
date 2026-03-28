// Giao giữa các mảng với tiêu chí so sánh được xác định bởi iteratee (làm tròn, so sánh thuộc tính, v.v.)
// Syntax: _.intersectionBy([arrays], [iteratee=_.identity])
// This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array.
// Tương tự như _.intersection nhưng nó nhận iteratee được gọi cho mỗi phần tử của mỗi mảng để tạo ra tiêu chí mà chúng được so sánh. Thứ tự và tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiên.

const _ = require("lodash");

const arr = [2.1, 1.2];
const other = [2.3, 3.4];

const result = _.intersectionBy(arr, other, Math.floor);
console.log(result); // Output: [2.1]

console.log(_.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
