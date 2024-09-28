import createPerson from "create_person";

// const createPerson = function (name, age, gender, mail) {
//     const person = {
//         name: name,
//         age: age,
//         gender: gender,
//         "e-mail": mail,
//         sayHi: function () {
//             console.log(`Привет! Меня зовут ${this.name}. Буду ${this.gender === "жен" ? "рада" : "рад"} пообщаться по почте. Пиши мне на ${this["e-mail"]}`);
//         }
//     };

//     return person;
// };

const clone = function (obj) {
    const copyObj = {}
    for (const key in obj) {
        copyObj[key] = obj[key];
    }
    return copyObj;
    /**
     * Необходимо реализовать логику, которая для входного
     * объекта сделает копию. И вернёт эту копию в качестве
     * результата.
     */
};


const person = createPerson("Радион", 33, "муж", "mymail@example.com");
const enother = clone(person);

enother["e-mail"] = "employee@company.org";

console.log(person);
console.log(enother);

if (enother !== person && enother["e-mail"] !== person["e-mail"]) {
    console.log("Да. Действительно. Мы успешно произвели клонирование.");
} else {
    console.log("Всё таки клонирование не получилось.");
} 