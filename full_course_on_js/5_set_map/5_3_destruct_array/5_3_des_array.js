'use strict'

// ---------------------------деструктуризация массива------------------------
console.log('----------------деструктуризация массива-----------------------');
const arr = [
    'apple',
    'pear',
    'milk',
    'lemon',
    'watermelon',
    'tea',
    'coffee',
    'melon',
];

const [fruitOne, , fruitTwo, , , , , fruitThree, notValue = 'someFruit'] = arr;

console.log(fruitOne);
console.log(fruitTwo);
console.log(fruitThree);
console.log(notValue); // Было underfind если бы не значение по умолчанию...

// ---------------------------Поменять местами переменные----------------------
console.log('-------------Поменять местами переменные-----------------------');

let [fruitOne1, fruitTwo1] = arr;
console.log(fruitOne1);
console.log(fruitTwo1);


[fruitOne1, fruitTwo1] = [fruitTwo1, fruitOne1];
console.log(fruitOne1);
console.log(fruitTwo1);

// ------------Использование деструктуризации в параметрах функций-------------
console.log('-----Использование деструктуризации в параметрах функций-------');

function coctailMixer([, fruit1, , fruit2,], drink) {
    console.log(`Вы приготовили ${fruit1} + ${fruit2} ${drink}`);
}

coctailMixer(arr, 'juice')