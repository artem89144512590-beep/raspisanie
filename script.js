// Код приветственного сообщения в консоль разработчика
console.log("Привет! Скрипт подключен и работает.");

// Поиск элемента по ID и добавление текущей даты в подвал
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// Подсветка активного пункта меню при клике
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Удаляем класс 'active' у всех ссылок навигации
    navLinks.forEach(l => l.classList.remove("active"));
    // Добавляем класс 'active' именно той ссылке, на которую нажали
    link.classList.add("active");
  });
});

// Логика открытия/закрытия бургер-меню
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Дополнительно: закрываем меню при клике на ссылку
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});