fetch('https://dummyjson.com/users/11')
    .then(res => res.json())
    .then((data) => {
        for (const element in data) {
            console.log(element, data[element])
        }
        // console.log(data)
    });

// fetch('https://dummyjson.com/users/search?q=oliviaw')
//     .then(res => res.json())
//     .then((data) => {
//         for (const element of data.users) {
//             for (const key in element) {
//                 console.log(key, element[key])
//             }
//             // console.log(element)
//         }
//     });


