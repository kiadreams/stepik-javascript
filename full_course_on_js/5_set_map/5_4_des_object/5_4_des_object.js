'use strict'

// ---------------------------деструктуризация объектов------------------------
console.log('----------------деструктуризация объектов----------------------');
const obj = {
  fruits: {
    apple: 'apple',
    pear: 'pear',
    melon: 'melon',
    watermelon: 'watermelon',
  },

  drinks: {
    milk: 'milk',
    juice: 'juice',
    tea: 'tea',
    coffee: 'coffee',
  },
};

// Первый вариант...
let {
  apple,
  melon,
  pear: fruitTwo,
  notValue: any = 'someFruit',
} = obj.fruits;

console.log(apple);
console.log(melon);
console.log(fruitTwo);
console.log(any); // Будет underfind т.к. в оbj нет таково параметра...

console.log();

let melon1 = 'littleFruit';
let watermelon1 = 'largeFruit';

// Второй вариант...
({ fruits: { melon, watermelon: watermelon1 } } = obj);

console.log(melon);
console.log(watermelon1);



// ------------Использование деструктуризации в параметрах функций-------------
console.log('-----Использование деструктуризации в параметрах функций-------');

function coctailMixer({ fruits: { apple, melon }, drinks: { juice } }) {
  console.log(`Вы приготовили ${apple} + ${melon} ${juice}`);
}

coctailMixer(obj)