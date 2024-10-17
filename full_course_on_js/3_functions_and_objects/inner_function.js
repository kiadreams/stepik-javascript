'use strict'

const firstName = "John";
const lastName = "Travolta";


// Первый вариант...
const user = {
    firstName,
    lastName,
    placeOfBird: "Armavir",
    birthYear: 1985,
    // calcAge: function() { // Можно так...
    //     return 2024 - this.birthYear;
    // }
    calcAge() { // А можно так...
        console.log(this);
        return 2024 - this.birthYear;
    }
}

console.log(user.calcAge());


// Второй вариант...
function calcAge() {
    console.log(this);
    return 2023 - this.birthYear;
}


const user2 = {
    firstName,
    lastName,
    placeOfBird: "Armavir",
    birthYear: 1985,
    // calcAge: calcAge // Можно так...
    calcAge // А можно так...
}

console.log(user2.calcAge());

function calcAge2() {
    return this;
}

console.log(calcAge2());