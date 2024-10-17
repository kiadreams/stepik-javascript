'use strict'

function myFn(a = 'Ваше число: ', b = 7 + 2) {
    console.log(a + b);
}

myFn();
myFn('Теперь ваше число: ', 7 + 5);