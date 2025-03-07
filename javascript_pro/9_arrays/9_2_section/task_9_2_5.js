const s = '1 3 4 4 5 6 7 8 1';

const nums = s.split(' ');
console.log(nums.length - new Set(nums).size);