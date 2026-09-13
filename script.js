document.addEventListener("DOMContentLoaded", () => {

    console.log("My Studio запущен");

    const searchButton =
        document.getElementById("searchButton");

    const loginButton =
        document.getElementById("loginButton");


    // Кнопка поиска
    searchButton.addEventListener("click", () => {
        alert("Поиск будет добавлен следующим этапом.");
    });


    // Кнопка авторизации
    loginButton.addEventListener("click", () => {
        alert("Авторизация будет подключена через Firebase.");
    });


    // Простая анимация появления карточек
    const cards =
        document.querySelectorAll(
            ".title-card, .person-card"
        );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(() => {

            card.style.transition =
                "opacity .5s ease, transform .5s ease";

            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";

        }, index * 100);

    });

});
