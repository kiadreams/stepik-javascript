const firstName = prompt("Напишите первое имя"),
    secondName = prompt("Напишите второе имя")

const randomNumber = (Math.floor(Math.random() * 100))


if (randomNumber < 33 && firstName != null && secondName != null && firstName !="" && secondName !="" ) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} вам нужно поискать человека с другим именем`)
} else if (randomNumber >= 33 && randomNumber < 66 && firstName != null && secondName != null && firstName !="" && secondName !="" ) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая, но может быть и лучше`)
}else if (randomNumber >= 66 && firstName != null && secondName != null && firstName !="" && secondName !="" ) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг к другу`)
} else {
    alert("Упс... Вы не ввели имя. Попробуйте еще раз.")
}


