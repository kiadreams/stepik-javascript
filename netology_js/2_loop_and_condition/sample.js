// export { absolute };
/*
 * Куда лучше поместить определение и реализацию функции absolute?
 * В конец данного кода или в начало?
 */
function absolute(num) {
    if (Object.is(num, -0)) {
        return 0;
    }
    if (num < 0) {
        num = num * -1;
    }
    return num;
}

let num = absolute(-37);

console.log(num);

num = absolute(12.5);
console.log(num);

num = absolute(0);
console.log(num);



console.log(absolute(-0))