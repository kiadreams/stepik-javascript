const x = '0 0 0 0 1 0 0';


const a = x
  .split(' ')
  .reverse()
  .indexOf('1');
console.log(a);
