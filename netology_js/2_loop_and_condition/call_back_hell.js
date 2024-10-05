const authUser = async function (userName, password) {
    const api = "https://dummyjson.com/";
    const result = {
        user: {
            id: null,
            firstName: null,
            lastName: null,
            cart: null,
        },
    };

    const userData = await fetch(`${api}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username: userName, password: password}),
    }).then(response => response.json());

    if (userData) {
        const { id, firstName, lastName } = userData;
        result.user = { id, firstName, lastName };
    }

    const cartData = await fetch(`${api}carts/user/${result.user.id}`)
        .then(response => response.json());

    if (cartData) {
        const {
            total: totalSumm,
            discountedTotal: discountedSumm
        } = cartData.carts[0];
        result.user.cart = {totalSumm, discountedSumm};
    }

    const cartProducts = []
    for (const product of cartData.carts[0].products) {

        const productData = await fetch(`${api}products/${product.id}`)
            .then(response => response.json());
        
        cartProducts.push({
            id: productData.id,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            discount: productData.discountPercentage,
            rating: productData.rating,
            count: product.quantity
        });
    }
    result.user.cart.products = cartProducts;

    return result;
};

// !!!!РЕШЕНИЕ ЭКСПЕРТА!!!!
const authUser1 = async function (username, password) {
    /*
     * Чтобы распутать callback hell, который получился с использованием
     * Promise, необходимо прибегнуть к async/await.
     */
    const api = "https://dummyjson.com/";
    const result = {
        user: {
            id: null,
            firstName: null,
            lastName: null,
            cart: null,
        },
    };
    /*
     * Сперва авторизуем пользователя, чтобы можно было получить
     * корзину пользователя, используя его id
     */
    const authResponse = await fetch(`${api}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    const auth = await authResponse.json();

    /*
     * Если данные об авторизации пустые или не проинициализированы,
     * то дальнейшее выполнение функциональности не имеет смысла.
     * Без id пользователя ничего не получить.
     */
    if (!auth) {
        return result;
    }

    const { id, firstName, lastName } = auth;

    result.user = { id, firstName, lastName };

    /*
     * После того, как получили данные о самом пользователе, запросим
     * данные о его корзине покупок.
     */
    const cartsResponse = await fetch(`${api}carts/user/${result.user.id}`);
    const userCartsData = await cartsResponse.json();

    /*
     * Опять же. Если нет данных о корзине покупок пользователя, то
     * нет смысла пытаться получить данные о товарах в корзине. Всё равно
     * не известно, что пользователь поместил в свою корзину. Прекратим
     * выполнение и вернём то, что есть на данный момент.
     */
    if (!userCartsData) {
        return result;
    }

    const userCart = userCartsData.carts[0];
    const { total: totalSumm, discountedTotal: discountedSumm } = userCart;

    /*
     * Возьмем из данных о корзине только то, что необходимо нам сейчас.
     */
    result.user.cart = { totalSumm, discountedSumm };
    result.user.cart.products = [];

    for (let product of userCart.products) {
        /*
         * Для всех товаров из корзины запросим данные для каждого товара
         */
        const productResponse = await fetch(`${api}products/${product.id}`);
        const { id, title, description, price, discountPercentage: discount, rating, } = await productResponse.json();

        result.user.cart.products.push({ id, title, description, price, discount, rating, count: product.quantity, });
    }

    /*
     * И вернём результат.
     */
    return result;
};

// Проверка кода работы!!!
authUser("liamg", "liamgpass").then((result) => {
    const user = result.user;
    const fullName = `${user.firstName} ${user.lastName}`;

    console.log(`Пользователь: ${fullName}`);
    console.log(`В корзине покупок ${fullName} находится товаров на сумму: ${user.cart.totalSumm}`);
    console.log(`С учетом скидок - ${user.cart.discountedSumm}`);
    console.log(`${fullName} собирается купить:`);

    user.cart.products.forEach((product) => console.log(`  - ${product.title} количеством ${product.count}`));
    console.log('');
});



authUser1("liamg", "liamgpass").then((result) => {
    const user = result.user;
    const fullName = `${user.firstName} ${user.lastName}`;

    console.log(`Эксперта Пользователь: ${fullName}`);
    console.log(`В корзине покупок ${fullName} находится товаров на сумму: ${user.cart.totalSumm}`);
    console.log(`С учетом скидок - ${user.cart.discountedSumm}`);
    console.log(`${fullName} собирается купить:`);

    user.cart.products.forEach((product) => console.log(`  - ${product.title} количеством ${product.count}`));
    console.log('');
});