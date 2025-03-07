const d = '/|\\';
let str = 'черника.компьютер.стол.книга';

str = str.replaceAll('.', d);
console.log(str);
