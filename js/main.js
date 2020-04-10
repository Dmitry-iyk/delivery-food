const cartButton = document.querySelector("#cart-button"); //Присваиваем идентификатор к кнопке
const modal = document.querySelector(".modal");//(Открытие третьей страницы) Обращаюсь к класу модал где хранится нужное окно
const close = document.querySelector(".close");//Закрытие третьего меню, кликнув на крест

//Можно это улушчшить...
// cartButton.addEventListener("click", function(event) {
//     modal.classList.add("is-open");
// })

// close.addEventListener("click", function(event) {
//     modal.classList.remove("is-open");
// })

cartButton.addEventListener ("click", toggleModal);//Когда случается клик по корзине класс расскрывается
close.addEventListener("click", toggleModal);//Когда кликаем по крестику закрывается

function toggleModal() {
    modal.classList.toggle("is-open");//Расскрывает содержимое
}

new WOW().init();//поключение задержки с перелистыванием картинок
