'use strict'

// ------------------РАБОТА С АТРИБУТАМИ ТЕГОВ------------------------
const linkSrc1 = "https://sun9-72.userapi.com/s/v1/if1/ynUMbjmwOQcAqRDcbbSJgQa-khoYMlYuc5r5KKjxLRmUpMeVQxPrhblW1f_Hqcx8G1CNKA.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,284x177&from=bu&u=O64BAN5v2zqbxe4t5OqDI5xPmTl5ZpA77g9Gg0eh5T4&cs=284x177"
const linkSrc2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leopard_in_the_Colchester_Zoo.jpg/300px-Leopard_in_the_Colchester_Zoo.jpg"

const audio = new Audio("./my_audio/Mountain Audio - Menu Click.mp3")
const img = document.querySelector("img");
console.log(img);
console.log(img.src);
img.addEventListener("click", changeImage);

function changeImage() {
    if (img.src === linkSrc1) {
        img.src = linkSrc2;

    } else {
        img.src = linkSrc1;
    }
    audio.play();
}

//  ---------------МЕТОДЫ РАБОТЫ С АТРИБУТАМИ-----------------------
// elem.hasAttribute("src"); - проверяет наличие атрибуты (false/true)
// elem.getAttribute("src"); - получить значение атрибута
// elem.setAttribute("src", "value"); - задать значение указанного атрибута
// elem.removeAttribute("src"); - удалить атрибут

