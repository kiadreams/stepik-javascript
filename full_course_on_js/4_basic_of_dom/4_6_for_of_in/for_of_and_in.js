const myArray = [1, 2, 4, 5];
for (const element of myArray) {
    console.log(element);
}

console.log();

for (const key in myArray) {
    console.log(key);
}

console.log();

const obj = {
    name: "John",
    lastName: "Travolta",
    age: 30,
};

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(`${key}:`, obj[key]);
    }
}