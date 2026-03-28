// Tìm vị trí phần tử đầu tiên trong mảng có giá trị bằng với giá trị đã cho, bắt đầu tìm kiếm từ vị trí fromIndex (mặc định là 0). Nếu fromIndex là âm, nó được sử dụng như một phần bù từ cuối của mảng.
// Syntax: _.indexOf(array, value, [fromIndex=0])
// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
// Lấy chỉ số tại phần tử đầu tiên có giá trị được thấy trong mảng sử dụng So sánh SameValueZero để so sánh. Nếu fromIndex là âm, nó được sử dụng như một phần bù từ cuối của mảng.

const _ = require("lodash");

const array = [1, 2, 1, 2];
console.log(_.indexOf(array, 2)); // 1
console.log(_.indexOf(array, 2, 2)); // 3
