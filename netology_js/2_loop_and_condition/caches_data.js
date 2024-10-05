const createDataProvider = function () {
    const cachesData = {}

    const getData = async function (url) {
        if (!(url in cachesData)) {
            const urlData = await fetch(url).then(response => response.json());
            cachesData.url = urlData;
        }
        return cachesData.url;
    }

    return getData;
};

// !!!РЕШЕНИЕ ЭКСПЕРТА!!!
const createDataProvider1 = function () {
    /*
     * Для данного задания вполне применимо замыкание.
     * По сути, это классический пример "мемоизации".
     * Создадим пустое хранилище данных, в которое
     * по ходу обращения за данными будем сохранять
     * результаты. А в случае отсутствия - добавлять их,
     * чтобы при следующем обращении не тратить время
     * и ресурсы чтобы получить данные по сети.
     *
     * В качестве хранилища может выступать обычный объект,
     * где свойство будет выступать ключём, а значение
     * свойства – непосредственно данными. Используем
     * в этот раз стандартную коллекцию Map, которая есть в
     * JavaScript.
     */
    const cache = new Map();

    /*
     * Реализуем и вернём функцию, которая будет заниматься
     * кэшированием данных, чтобы не получать их каждый раз
     * по сети.
     */
    return async function (url, options) {
        /*
         * Если в нашем хранилище уже есть данные по определённому
         * ключу, то мы просто вернём их, так как они уже когда-то
         * получены и преобразованы в json.
         */
        if (cache.has(url)) {
            return cache.get(url);
        }

        /*
         * Если выполнение логики добралось до этого места, то
         * значит нет запрашиваемых данных в хранилище, а значит
         * их необходимо получить, преобразовать, сохранить и вернуть.
         * Сначала получим данные.
         */
        const response = await fetch(url, options);
        /*
         * Далее преобразуем в json, используя возможности результатов fetch
         */
        const data = await response.json();
        /*
         * Сохраним преобразованные данные в хранилище. В качестве ключа
         * уникальности используем url, по которому запрашивали данные.
         * В следующий раз, вызывая данную функцию, будет произведена
         * проверка наличия уже полученных данных в хранилище по url, как
         * по ключу.
         */
        cache.set(url, data);

        /*
         * Вернём запрашиваемые данные.
         */
        return data;
    };
};


// !!!ПРОВЕРКА РАБОТЫ КОДА!!!

(async function () {
    const dataProvider = createDataProvider();
    let result = await Promise.all([
        dataProvider("https://dummyjson.com/products"),
        dataProvider("https://dummyjson.com/products/3"),
        dataProvider("https://fakestoreapi.com/users/"),
    ]);

    console.log(result);

    result = await Promise.all([
        dataProvider("https://dummyjson.com/products"),
        dataProvider("https://dummyjson.com/products/1"),
        dataProvider("https://fakestoreapi.com/users/"),
    ]);
    console.log(result);
    console.log('мое решение');
})();

(async function () {
    const dataProvider = createDataProvider1();
    let result = await Promise.all([
        dataProvider("https://dummyjson.com/products"),
        dataProvider("https://dummyjson.com/products/3"),
        dataProvider("https://fakestoreapi.com/users/"),
    ]);

    console.log(result);

    result = await Promise.all([
        dataProvider("https://dummyjson.com/products"),
        dataProvider("https://dummyjson.com/products/1"),
        dataProvider("https://fakestoreapi.com/users/"),
    ]);
    console.log(result);
    console.log('эксперта решение');
})();
