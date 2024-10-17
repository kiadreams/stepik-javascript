const age = 20

// age >= 18 ? console.log("Мне есть 18 и я могу пить винишко") : console.log("Я еще слишком маленький. Пью сок")

const drink = age >= 18 ? "wine" : "juce"

console.log(drink)

let drink2
if (age >= 18) {
    drink2 = "wine"
} else {
    drink2 = "juce"
}

console.log(drink2)

console.log(`Я люблю пить ${age >= 18 ? "wine" : "juce"}`)