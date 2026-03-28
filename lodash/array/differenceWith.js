//
//
// This method is like "_.difference" except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
// Đây là phương thức giống như "_.difference" ngoại trừ việc nó chấp nhận một bộ so sánh được gọi để so sánh các phần tử của mảng với các giá trị. Thứ tự và tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiêm. Bộ so sánh được gọi với hai đối số: (arrVal, othVal).

const _ = require("lodash");

const arr1 = [0, 1, 2.2, 3.5];
const arr2 = [2, 3.4, 4.6, 5];

console.log(_.differenceWith(arr1, arr2, _.isEqual)); // [0, 1, 2.2, 3.5]
console.log(_.differenceWith(arr2, arr1, _.isEqual)); // [2, 3.4, 4.6, 5]
