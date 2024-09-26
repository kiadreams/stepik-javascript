/*
* Здесь необходимо реализовать создание объекта Каталог.
* Каталог должен:
*   - Хранить список товаров. Необходимо добавить свойство goods.
*   - Уметь добалять новый товар. Необходимо реализовать метод
*     addGood. В качестве параметров метод должен принимать:
*       - id           (идентификатор товара типа number)
*       - name         (название товара типа string)
*       - description  (описание товара типа string)
*       - sizes        (размеры товара в виде массива со значениями размеров)
*       - price        (цена товара типа number)
*       - available    (наличие товара типа boolean)
*     Данные параметры необходимы для формирования объекта Товар,
*     который будет добавлен в список goods. В качестве результата
*     метод ничего не возвращает.
*   - Уметь искать и возвращать товар по идентификатору. Необходимо
*     реализовать метод getGood. В качестве параметра метод должен
*     принимать идентификатор (id) товара. В качестве результата
*     метод должен возвращать объект Товар из списка Каталога.
*     Если товар не был найден по id, то вернуть null.
*/

/*
* Здесь необходимо реализовать создание объекта Корзина.
* Корзина должна:
*   - Хранить список товаров c их количеством. Необходимо добавить свойство orders.
*   - Уметь добалять новый товар с количеством. Необходимо реализовать
*     метод addGood. В качестве параметра метод должен принимать
*     объект вида:
*
*     {
*        good: //здесь ссылка на товар из каталога,
*        amount: // количество товара, например, 2
*     }
*
*     В качестве результата метод ничего не возвращает.
*   - Уметь удалять определённый товар из Корзины. Необходимо реализовать
*     метод removeGood. В качестве параметра метод должен принимать
*     идентификатор товара, по которому товар можно найти в Карзине и удалить
*     из неё. В качестве результата метод ничего не возвращает.
*   - Уметь полностью очищать Корзину. Необходимо реализовать
*     метод clearCart. Метод никаких параметров не принимает.
*     В качестве результата метод ничего не возвращает.
*   - Уметь подсчитывать общее количество всех товаров в Корзине и
*     общую стоимость всех товаров в Корзине. Необходимо реализовать
*     метод getTotalAmountAndTotalSumm. Метод никаких параметров не принимает.
*     В качестве результата необходимо вернуть объект вида:
*
*     {
*        totalAmount: //в качестве значения - расчитанное количество всех товаров,
*        totalSumm: //в качестве значения - расчитанная стоимость всех товаров,
*     }
*/


function createCatalog() {
    const catalog = {
        goods: [],
        addGood(id, name, description, sizes, price, available) {
            const good = {
                id: id,
                name: name,
                description: description,
                sizes: sizes,
                price: price,
                available: available
            }
            this.goods.push(good);
        },
        getGood(id) {
            for (const good of this.goods) {
                if (good.id === id) {
                    return good;
                }
            }
            return null;
        }
    }
    return catalog;
  };
  
  function createCart() {
    const cart = {
        orders: [],
        addGood(order) {
            this.orders.push(order);
        },
        removeGood(id) {
            let orderId = 0;
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].good.id === id) {
                    orderId = i;
                    break;
                }
            }
            this.orders.splice(orderId, 1);
        },
        clearCart() {
            this.orders = [];
        },
        getTotalAmountAndTotalSumm() {
            let totalAmount = 0;
            let totalSumm = 0;
            for (const el of this.orders) {
                totalAmount += el.amount;
                totalSumm += el.good.price * el.amount;
            }
            return {totalAmount: totalAmount, totalSumm: totalSumm};
        }
    }
    return cart;
  };
  
//   export { createCatalog, createCart };

// ПРОВЕКРА РАБОТЫ ПРОГРАММЫ!!!

const goods = [
    [1, "Рубашка белая", "Очень стильная и удобная", ["XS", "S", "M", "L", "XL", "2XL"], 49, true],
    [2, "Брюки черные", "Стильные штаны для деловых переговоров", ["S", "M", "L", "XL", "2XL"], 99, false],
    [3, "Ботинки Саламандра", "Без них не обойтись в плохую погоду", [39, 41, 42, 43, 45, 46], 19, false],
    [4, "Кроссовки спортивные", "Лучшие для бега", [37, 38, 39, 41, 44, 45], 4.9, true],
];
const catalog = createCatalog();
const cart = createCart();

console.log(catalog.goods);

let good = goods[3];

catalog.addGood(...good); // Добавим один товар в каталог

console.log(catalog.goods[0]);

let [goodId] = good;
let catalogGood = catalog.getGood(goodId); // возьмем товар из каталога
console.log(catalogGood);
logCatalogGood(catalogGood); // Посмотрим на него

for (let i = 0; i < goods.length - 1; i++) {
  good = goods[i];
  catalog.addGood(...good); // Добавим остальные товары в каталог
}

for (let item of goods) {
  const [id] = item;

  catalogGood = catalog.getGood(id); // возьмем товары из каталога

  logCatalogGood(catalogGood); // Посмотрим на них
}

catalogGood = catalog.getGood(3);

cart.addGood({ good: catalogGood, amount: 1 }); // Добавим один товар в корзину

let totalCalcs = cart.getTotalAmountAndTotalSumm(); // Посчитаем общее количество и общую сумму

logCartCalculations(totalCalcs); // Посмотрим на них

// Добавим еще товары в корзину и посмотрим на общее количество и общую сумму
catalogGood = catalog.getGood(4);
cart.addGood({ good: catalogGood, amount: 1 });
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

catalogGood = catalog.getGood(1);
cart.addGood({ good: catalogGood, amount: 1 });
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

// Удалим один товар из корзины и посмотрим на общее количество и общую сумму
cart.removeGood(4);
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

// Очистим корзину полностью и посмотрим на общее количество и общую сумму
cart.clearCart();
totalCalcs = cart.getTotalAmountAndTotalSumm();
logCartCalculations(totalCalcs);

function logCatalogGood(catalogGood) {
  console.log(`Товар ${catalogGood.name} по цене ${catalogGood.price}`);
}

function logCartCalculations(totalCalcs) {
  console.log(
    `В корзине товаров количеством ${totalCalcs.totalAmount} на общую сумму ${totalCalcs.totalSumm}`
  );
}