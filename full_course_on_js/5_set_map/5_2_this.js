'use strict'

function calcAge() {
    console.log(2024 - this.age);
    console.log(this);
};


function showThis() {
    console.log(this);
}

const user = {
    name: "John",
    age: 30,
    calcAge: calcAge,
    showThis: showThis,
};

// здесь контекст this будет объект user
user.calcAge();
user.showThis();



// здесь контекст this будет undefined с 'use strict'
// и объект Window в без 'use strict' (в окружении браузера)
// и глобальный объект без 'use strict' (в окружении node)
// в стрелочных функциях this выходит во внешнюю область видимости
// в независимости от 'use strict' (в node всегда пустой объект)
showThis();

const sample = function() {
    console.log(this);
};

sample();

const sample2 = () => {
    console.log(this);
};
console.log();
sample2();