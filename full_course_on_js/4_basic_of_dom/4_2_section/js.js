'use strict'

// ----------ПОЛУЧЕНИЕ ИЗМЕНЕНИЕ И ЗАМЕНА ЭЕЛЕМЕНТОВ---------------
// document.querySelector("tag" or ".class") получает один первый элемент
// document.querySelectorAll("tag" or ".class") получает псевдомасив элементов
// -------------------ПОЛУЧЕНИЕ УЗЛОВ-------------------------------
// element.parenNode() получает родительский узел
// 
// 
// 

const h1 = document.querySelector("h1");
// innerHTML МЕНЯЕТ СОДЕРЖИМОЕ ИСХОДНОГО ЭЛЕМЕНТА, может менять то что внутри тега (тег и вложенные теги)
console.log(h1.innerHTML);
console.log(h1.outerHTML);
const oldH1 = h1.innerHTML;
h1.innerHTML = `<p>Я новый ЗАГОЛОВОК!!!</p>`;
const newH1 = h1.innerHTML;
h1.innerHTML += `${oldH1} - я старый заголовок${newH1} - новый заголовок<p>Привет, снова новый ЗАГОЛОВОК!!!</p>`;

console.log("-----------УЗЛЫ-------------");
console.log(h1);
console.log(h1.parentNode);
console.log(h1.nextSibling);
console.log(h1.lastChild);
console.log(h1.firstChild);
console.log(h1.childNodes);
console.log(h1.previousSibling);


console.log(h1.innerHTML);
console.log(h1.outerHTML);

console.log();

// textContent может менять только текст внутри
const h2 = document.querySelector("h2");
console.log(h2.textContent);
const oldText = h2.textContent;
h2.textContent = `<p>${oldText} - я старый текст</p> <p>Привет, я новый текст - теги отоображаю как текст</p>`;

console.log();

const navList = document.querySelector(".nav__list");
console.log(navList.innerHTML);
console.log(navList.textContent);
console.log(navList.outerHTML);
navList.innerHTML += '  <li class="nav__item">Пункт меню 4;</li>';
console.log(navList.innerHTML);
console.log(navList.textContent);
console.log(navList.outerHTML);

console.log();

// outerHTML НЕ МЕНЯЕТ ИСХОДНЫЙ ЕЛЕМЕНТ, но замещает сущестыющий элемент на НОВЫЙ не сохраняя его никуда (тег и вложенные теги)!!!
// ЧТОБЫ ПОЛУЧИТЬ К НОВОМУ ЭЛЕМЕНТУ ДОСТУП, НУЖНО ЗАНОВО ПОЛУЧАТЬ ССЫЛКУ К НЕМУ ЧЕРЕЗ QUERYSELECTOR...
const h3 = document.querySelector("h3");

console.log(h3.outerHTML);
console.log(h3.innerHTML);
console.log(h3.textContent);

console.log();

h3.outerHTML = "<h3 class='outer_1'>Поменяли outer Заголовок</h3>"; // Здесь создан новый DOM елемент
const newOuter = document.querySelector(".outer_1")
console.log(newOuter.outerHTML);
console.log("Меняем новый созданный DOM элемент снова...")
newOuter.outerHTML = `<h3 class="outer_2">${newOuter.textContent} + <p>добавили один параграф</p></h3>`; // Поменяли вновь созданный элемент

console.log(h3.outerHTML);
console.log(newOuter.outerHTML);
console.log(document.querySelector("h3").outerHTML);

console.log();

const elem = document.querySelector("h4");
console.log(elem);
console.log(elem.firstChild);
elem.firstChild.data += " + data добавила текста"

console.log();

// -------------СОЗДАНИЕ НОВЫХ ЭЕЛЕМЕНТОВ (ТЕГОВ)------------------

const secondHeader = document.createElement("h2");
// secondHeader.innerHTML = "Я заголовок второго уровня";
secondHeader.textContent = "Я заголовок второго уровня"
console.log(secondHeader.outerHTML);
// -------------ВСТАВКА НОВЫХ ЭЕЛЕМЕНТОВ (ТЕГОВ)------------------
function createSomeElement(tag, text) {
    const newElem = document.createElement(tag);
    newElem.textContent = text;
    return newElem;
}

const existElem = document.querySelectorAll("li")[1];
console.log(existElem);
// ----До существующего элемента...
existElem.before(
    createSomeElement("p", "- Параграф до второго элемента списка;"),
    "Добавим текса..."
);
// ----После существующего элемента...
existElem.after(
    createSomeElement("p", "- После второго элемента списка;"),
    "Добавим текста и после..."
);
// ----Внутрь существующего элемента до его содержимого...
existElem.prepend(createSomeElement("p", "Внутрь второго элемента до его содержимого (до первого child)"))
// ----До существующего элемента после его содержимого...
existElem.append(createSomeElement("p", "Внутрь второго элемента после содержимого (последнего child)"))

console.log();

// -------------СОЗДАНИЕ НОВОГЫХ ЕЛЕМЕНТОВ (ТЕКСТОВОГО УЗЛА)------------------
const newTextElem = document.createTextNode("New Text Element")
const existElem2 = document.querySelectorAll("li")[2];
existElem2.append(newTextElem);


// -------------ВСТАВКА ТЕКСТА В ЕЛЕМЕНТ (ТЕКСТОВОГО УЗЛА)------------------
const exisElem0 = document.querySelector("li");
exisElem0.append(" Добавили текста в 0-ой элемент...");

// --------------ТОЧНАЯ ВСТАВКА ЕЛЕМЕНТ (HTML/ELEMENT/TEXT)--------------------------
// exisElem.insertAdjacentHTML(position, elem)
// exisElem.insertAdjacentElement(position, elem)
// exisElem.insertAdjacentText(position, elem)
// positions maybe as: "beforebegin", "afterbegin", "beforeend", "afterend"
const exisElem3 = document.querySelectorAll("li")[3];
exisElem3.insertAdjacentElement("beforebegin", createSomeElement("p", "Попробовал вставку элемента до..."));
exisElem3.insertAdjacentHTML("afterend", "<p>Попробовал вставку html после...</p>");
exisElem3.insertAdjacentText("beforeend", "Попробовал вставку текса после");

console.log();

// -------------ПЕРЕМЕЩЕНИЕ СУЩЕСТВУЮЩИХ ЕЛЕМЕНТОВ-------------------------
// Предудущие изученые методы:
//     exisElem.before(exisElem)
//     exisElem.after(exisElem)
//     exisElem.prepend(exisElem)
//     exisElem.append(exisElem)
// позволяют и перемещать существующие элементы в DOM.
let liItems = document.querySelectorAll(".li_item");
console.log(document.querySelector(".ul_list").outerHTML);
liItems[1].after('\n    ', liItems[0]); // Добавили перенос строки и пробелы для красивой разметке в редакторе!
console.log(document.querySelector(".ul_list").outerHTML);

console.log();

// -------------КОПИРОВАНИЕ СУЩЕСТВУЮЩИХ ЕЛЕМЕНТОВ-------------------------

const ulList = document.querySelector(".ul_list");
console.log(ulList.outerHTML);
let clonUl = ulList.cloneNode(); // Копирует без потомков
clonUl = ulList.cloneNode(true); // Копирует c потомками
ulList.after(clonUl);

// -------------УДАЛЕНИЕ СУЩЕСТВУЮЩИХ ЕЛЕМЕНТОВ-------------------------
liItems = document.querySelectorAll(".li_item");
console.log(liItems, liItems.length);
liItems[5].remove()

console.log();

// ---ИМЕНЕНИЕ СТИЛЕЙ ЕЛЕМЕНТОВ INLINE (В HTML РАЗМЕТКЕ) нежелатeльно применять-------------------------
let header = document.querySelector("h2");
console.log(header.style.fontSize);
header.style.fontSize = "14px";     // Изменение стилей в inline записи построчно
header.style.backgroundColor = "yellow";
console.log(header.style.fontSize);
header.style.cssText = `
    color: red;
    margin-bottom: 100px;
`
// Заметим что предыдущий размер 14px и желтый цвет фона затерлись и не отоображаются
console.log(header.style.fontSize);

console.log();

// ---ИМЕНЕНИЕ СТИЛЕЙ ЕЛЕМЕНТОВ в классах (ПРЕДПОЧТИТЕЛЬНЫЙ СПОСОБ)-------------------------
// element.classList.add("class"); добавляет класс
// element.classList.remove("class"); удаляет класс
// element.classList.toggle("class"); добавляет класс, если его нет или удаляет его если он есть 
// element.classList.contains("class"); проверяет наличие класса (возвращает true/false)

liItems[4].classList.add("newClass");
console.log(liItems[2].className);
// liItems[2].className = "newClass"  // Но это присвоение заместит все сущестыующие у элемента классы
liItems[2].className += " newClass" // Данная реализация добавляет к существующим классам дополнительный класс
console.log(liItems[2].className);

console.log();

// -------------ПОЛУЧЕНИЕ ИСХОДНЫХ СТИЛЕЙ ЕЛЕМЕНТА (ПСЕВДОЭЛЕМЕНТА)--------------------

console.log(getComputedStyle(header));
const styleOfHeader = getComputedStyle(header);
console.log(styleOfHeader.marginBottom);
console.log(parseInt(styleOfHeader.marginBottom));

// Получение стилей псевдоэлементов
let styleOfLi = getComputedStyle(liItems[2], "::before");
console.log(styleOfLi);
console.log(getComputedStyle(liItems[2], "::after"));

console.log();

// -------------ИЗМЕНЕНИЕ СТИЛЕЙ МНОГИХ ЭЛЕМЕНТОВ--------------------
let navItem = document.querySelectorAll(".nav__item");
console.log(navItem);
navItem.forEach((elem) => elem.classList.add("newClass"));
