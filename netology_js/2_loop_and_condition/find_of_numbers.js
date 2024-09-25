const findPrimeNums = function (amount) {
    if (amount < 1) {
        return [];
    }

    let result = [2];
    let next = 3;

    while (result.length < amount) {
        

        // Первый вариант - перебор всех делителей!
        // let dividers = [];

        // for (let index = 1; index * index <= next; index++) {
        //     if (next % index === 0) {
        //         dividers.push(index);
        //         if (index * index !== next) {
        //             dividers.push(next / index);
        //         }
        //     }
        // }

        // if (dividers.length === 2) {
        //     result.push(next);
        // }

        // Второй вариант - деление следующего числа на все найденные до этого простые числа нецело!
        let isComplex = false;

        for (const el of result) {
            if (next % el === 0) {
                isComplex = true;
                break;
            }
        }

        if (!isComplex) {
            result.push(next);
        }
        
        next += 2;
    }
    
    return result;
};

let primeNums = findPrimeNums(2);
console.log(primeNums);

primeNums = findPrimeNums(5);
console.log(primeNums);

primeNums = findPrimeNums(50);
console.log(primeNums);