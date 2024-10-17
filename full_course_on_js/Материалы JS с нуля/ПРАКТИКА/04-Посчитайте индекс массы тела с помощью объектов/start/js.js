/* 

ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
4. - Создайте метод в объекте который будет считать индекс массы тела и возвращать результат
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.

*/

function getName() {
    return prompt('Укажите имя человека');
}

function getHeight () {
    return parseFloat(prompt('Укажите рост человека'));
}

function getWeight () {
    return parseFloat(prompt('Укажите вес человека'));
}

const person1 = {
    name: getName(),
    height: getHeight(),
    weight: getWeight(),
    showBmi() {
        return this.weight / (this.height * this.height);
    }
}

    
const person2 = {
    name: getName(),
    height: getHeight(),
    weight: getWeight(),
    showBmi() {
        return this.weight / (this.height * this.height);
    }
}

console.log(person1)
console.log(person2)

if (person1.showBmi() > person2.showBmi()) {
    console.log(`Индекс массы тела ${person1.name} (${person1.showBmi()})
     больше индекса массы тела ${person2.name} (${person2.showBmi()})`)
} else if (person1.showBmi() < person2.showBmi()) {
    console.log(`Индекс массы тела ${person2.name} (${person2.showBmi()})
    больше индекса массы тела ${person1.name} (${person1.showBmi()})`)
} else {
    console.log(`Индекс масс тел ${person2.name} и ${person1.name} равны ${person2.showBmi()}`)
}