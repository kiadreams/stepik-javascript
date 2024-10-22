'use strict'

// -------------------------------Оператор спред------------------------------
console.log('----------------------Оператор спред--------------------------');

const string = 'proba pera';
console.log(...string);
console.log([...string]);

const arr = [1, 2, 3, 4, 5,];
console.log(...arr);

const obj = {
  fruits: ['apple', 'pear', 'melon', 'watermelon',],
  drinks: ['milk', 'juice', 'tea', 'coffee',],
};

console.log(...obj.fruits);
console.log(...obj.drinks);

const bigArr = ['hello', ...obj.fruits, ...string, ...obj.drinks];
console.log(bigArr);



// ---------------Использование spread в параметрах функций----------------
console.log('----------Использование spread в параметрах функций-----------');

function coctailMixer(drink, ing1, ing2) {
  console.log(`Вы приготовили ${drink} из ${ing1} и ${ing2}`);
}

coctailMixer('tea', ...obj.fruits)