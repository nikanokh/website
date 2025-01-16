// Получаем элементы модального окна и кнопки
const modal = document.getElementById("modal");
const openModalButtons = document.querySelectorAll(".open-modal");
const closeButton = document.querySelector(".close-button");

// Функция для открытия модального окна
openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tourName = button.getAttribute("data-tour");
        const tourDescription = "Описание тура " + tourName; // Здесь можно добавить реальное описание

        document.getElementById("modal-title").innerText = tourName;
        document.getElementById("modal-description").innerText = tourDescription;

        modal.style.display = "block"; // Показываем модальное окно
    });
});

// Функция для закрытия модального окна
closeButton.addEventListener("click", () => {
    modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
});