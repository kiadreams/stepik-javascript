// 'use strict'

let a = 5;

function multiConsole() {
    console.log('Hello world!');
    console.log('Hello world!');
    a = 7;
    b = 4;
    console.log(a);

}

const result = multiConsole();
console.log(result);
console.log(b);