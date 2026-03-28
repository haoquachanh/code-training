// Trả về phần tử đầu tiên trong mảng mà predicate trả về giá trị đúng.
// Cú pháp: _.find(collection, [predicate=_.identity], [fromIndex=0])
// Iterates over elements of collection, returning the first element predictate returns truthy for. The predicate is invoked with three arguments: (value, index, collection).
// Lặp qua các phần tử của collection, trả về phần tử đầu tiên mà predicate trả về giá trị đúng. Predicate được gọi với ba đối số: (value, index, collection).

const _ = require("lodash");

const users = [
  { user: "A", active: false },
  { user: "B", active: false },
  { user: "C", active: true },
  { user: "D", active: true },
];

console.log(_.find(users, (o) => o.active === true));
