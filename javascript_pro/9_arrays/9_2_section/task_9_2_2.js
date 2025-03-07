const x = '1 7 3 1 5 6';

const a = x.split(' ').reduce((summa, x) => summa + x**2, 0);
console.log(a);
