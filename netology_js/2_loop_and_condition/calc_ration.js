const calcSummaryRate = function (dailyRation) {
    let summa = 0;
    for (const key in dailyRation) {
        summa += dailyRation[key];
        console.log(summa);
    }
    dailyRation.summary = summa;
    return dailyRation;
    /*
     * Необходимо посчитать сумму всех потреблённых калорий за день,
     * используя данные пользователя - калории, потреблённые на завтрак,
     * обед, ужин, полдник, перекус. Причём мы не можем гарантировать, что
     * все пользователи нашего приложения производят приём пищи абсолютно
     * одинаково. Кто-то может обедать и ужинать, но не завтракать.
     * А кто-то может завтракать, осуществлять перекусы, обедать,
     * но не ужинать. А кто-то вообще по-другому выстраивает график
     * приёма пищи на день для себя.
     * 
     * Результат подсчёта суммы необходимо присвоить в этот же объект свойству
     * summary.
     */
  };

  let mondayRation = {
    breakfast: 1240,
    lunch: 765,
    dinner: 564,
};

mondayRation = calcSummaryRate(mondayRation);

console.log(mondayRation.summary);