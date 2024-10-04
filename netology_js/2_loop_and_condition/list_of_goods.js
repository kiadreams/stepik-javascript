const getAllProducts = async function () {
    /*
     * Необходимо изменить код так, чтобы result был не
     * пустым. Необходимо дождаться, пока данные о товарах
     * будут получены и преобразованы в json.
     */
    let result = [];

    await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            result = data;
        });

    return result;
};



// Решение эксперта!!!
const getAllProducts1 = async function () {
    /*
     * Для данного задания используем async/await.
     * Ключевое слово async всегда ставится перед объявлением функции, либо перед 
     * () => {}. Это помечает, что функция вернёт Promise в качестве результата. В 
     * случае возникновения ошибки во время выполнения функции, такой Promise 
     * автоматически запустит reject и передаст ошибку. При успешном выполнении
     * функции, Promise автоматически запустит resolve и передаст результат, который 
     * возвращается с помощью return внутри функции. Когда функция ничего не 
     * возвращает, будет передано значение undefined.
     * 
     * В теле такой функции, и только там, можно использовать ключевое слово await. 
     * Это помечает запускаемые промисы. Для интерпретатора это означает, что пока 
     * запущенный промис всё ещё выполняется или ждёт выполнения, следующая логика 
     * не будет выполнена, и код будет ждать в этом месте. Только после выполнения
     * логики внутри запущенного промиса и завершения его выполнения, на этом уровне 
     * кода пойдет дальше.
     * 
     * Таким образом, в нашей логике мы будем ждать, пока fetch выполнит получение 
     * данных по сети. Как только мы получим данные, мы начнем их преобразование в 
     * формат JSON, и опять будем ждать. После этого мы получим данные в виде JSON, и 
     * это будет наш результат, который возвращаем из функции.
     */
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();

    return result;
    /*
     * Одной удобной особенностью такой работы с промисами является то,
     * что код выглядит проще. Его легче читать, воспринимать и легче
     * разбираться в нём.
     */
};

// Проверка исполнения кода!!!

getAllProducts().then((products) => {
    console.log("Получен список товаров из моего кода");
    console.log(products); // Ожидаем что список товаров не пустой
});

getAllProducts1().then((products) => {
    console.log("Получен список товаров из кода эексперта");
    console.log(products); // Ожидаем что список товаров не пустой
});