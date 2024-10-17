'use strict'

console.log(confirm('Это первый вопрос?'));

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no()
    }
}

function showOk() {
    console.log('Спасибо за согласие!');
}

function showCancel() {
    console.log('Вы отменили выполнение');
}

ask('Вы согласны?', showOk, showCancel);

ask(
    'Второй вариант!',
    () => {alert('Блогадарю за согласие!')},
    function () {alert('Вы отменили выполнение')}
);

const alpha = a => console.log('dsa');
console.log(alpha())