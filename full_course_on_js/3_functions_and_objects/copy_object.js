'use strict'

const obj1 = {
    name: 'Igor',
    age: 34,
    nums: [1, 2, 4]
}

let obj2 = obj1;

// obj2.name = 'Sasha';
// { name: 'Sasha', age: 34, nums: [ 1, 2, 4 ] }
// { name: 'Sasha', age: 34, nums: [ 1, 2, 4 ] }


// Первый метод...
// obj2 = Object.assign({}, obj1);
// obj2.name = 'Sasha';
// { name: 'Igor', age: 34, nums: [ 1, 2, 4 ] }
// { name: 'Sasha', age: 34, nums: [ 1, 2, 4 ] }

// Второй метод...
// obj2 = {...obj1};
// obj2.name = 'Sasha';
// { name: 'Igor', age: 34, nums: [ 1, 2, 4 ] }
// { name: 'Sasha', age: 34, nums: [ 1, 2, 4 ] }
// obj2.nums[0] = 34
// { name: 'Igor', age: 34, nums: [ 34, 2, 4 ] }
// { name: 'Sasha', age: 34, nums: [ 34, 2, 4 ] }

obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = 'Sasha';
obj2.nums[0] = 34

console.log(obj1);
console.log(obj2);



console.log(a);
var a = 5;

let foo = {name: `kitten`}
let prop = `name`

console.log(foo.name) // 1
console.log(foo[`name`]) // 2
console.log(foo[prop]) // 3



console.log(3 + 2 + "7");
