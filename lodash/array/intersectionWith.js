//
//
// This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array.
// Tương tự như _.intersection nhưng nó nhận iteratee được gọi cho mỗi phần tử của mỗi mảng để tạo ra tiêu chí mà chúng được so sánh. Thứ tự và tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiên.

const _ = require("lodash");

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [{ x: 1, y: 2 }];

console.log(_.intersectionWith(objects, others, _.isEqual));
// => [{ 'x': 1, 'y': 2 }]
