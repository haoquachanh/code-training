// Hàm trả về mảng chứa các phần tử của mảng đầu tiên mà không có trong mảng thứ hai, so sánh bằng cách sử dụng một iteratee hoặc một bộ so sánh.
// Cú pháp: _.differenceBy(array, [values], [iteratee=_.identity  ])
// This method is like "_.difference" except that it accepts an iteratee which is invoked for each element of the array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).
// Hàm này giống như "_.difference" ngoại trừ việc nó chấp nhận một iteratee được gọi cho mỗi phần tử của mảng và các giá trị để tạo ra tiêu chí mà chúng được so sánh. Thứ tự và tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiên. Iteratee được gọi với một đối số: (value).

const _ = require("lodash");

const arr1 = [0, 1, 2.2, 3.5];
const arr2 = [2, 3.4, 4.6, 5];

console.log(_.differenceBy(arr1, arr2, Math.floor)); // [0, 1]
console.log(_.differenceBy(arr2, arr1, Math.floor)); // [4, 5]
