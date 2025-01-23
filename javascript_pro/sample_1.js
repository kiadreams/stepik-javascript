console.log(parseInt('3') * parseInt('4') + 2);
console.log(Number('3') * Number('4') + 2);

// Перевести в число с помощью унарноно оператора "+"!!!
let a = '1', b = '2';
console.log(a, b, a + b, +a + +b);

let c = '45';
console.log(+c%2 === 0 && c.length === 2 || +c%2 !== 0 && c.length === 3)