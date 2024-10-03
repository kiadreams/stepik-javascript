const parseToJSON = function (data) {
    let json = null;
    try {
        json = JSON.parse(data);
    } catch (e) {
        return {};
    }



    /*
     * Необходимо реализовать преобразование переданных данных
     * из текстового формата в формат json, используя JSON.parse.
     * Функция вернёт результат преобразования. Если в процессе
     * преобразования возникнет ошибка, необходмо вернуть
     * пустой объект {}.
     */

    return json;
};

console.log(parseToJSON("{'adf': 1}"))