// Cắt khúc theo Size
// Cú pháp: _.chunk(array, [size=1])
// create an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
// tạo một mảng các phần tử được chia thành các nhóm có độ dài bằng size. Nếu mảng không thể chia đều, phần tử cuối cùng sẽ là phần tử còn lại

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.chunk(arr, 2)); //   [    [1, 2],    [3, 4],   [5, 6],    [7, 8]]
console.log(_.chunk(arr, 4)); //   [    [1, 2, 3, 4],    [5, 6, 7, 8]          ]
console.log(_.chunk(arr, 7)); //  [    [1, 2, 3, 4, 5, 6, 7]   ,    [8]    ]
