// EXAMPLE 1 - Sort the Keys of an Object in JavaScript

const obj = {z: 'three', a: 'one', b: 'two'};

const sorted = Object.keys(obj)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = obj[key];

    return accumulator;
  }, {});

console.log(sorted); // 👉️ {a: 'one', b: 'two', z: 'three'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Iterating with forEach()

// const obj = {z: 'three', a: 'one', b: 'two'};

// // 👇️ ['a', 'b', 'z']
// console.log(Object.keys(obj).sort());

// const sorted = Object.keys(obj)
//   .sort()
//   .reduce((accumulator, key) => {
//     accumulator[key] = obj[key];

//     return accumulator;
//   }, {});

// Object.keys(sorted).forEach(key => {
//   console.log(key, sorted[key]); // 👉️ a one, b two, z three
// });
