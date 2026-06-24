// --- ИЗ ПРОШЛЫХ ПР: Проверка подключения и вывод даты ---
console.log("Привет! Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// --- НОВОЕ ПО ПР 6: Логика переключения и запоминания темы ---
const themeToggle = document.getElementById("theme-toggle");

// Проверяем сохранённую тему при загрузке страницы
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️"; // Меняем иконку на солнце для темной темы
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  
  // Сохраняем выбор пользователя в localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
  
  // Меняем иконку на кнопке
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// --- ИЗ ПРОШЛЫХ ПР: Подсветка активного пункта меню и бургер-меню ---
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// --- ИЗ ПР 5: Логика кнопки «Показать больше» ---
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});

// --- НОВОЕ ПО ПР 6: Логика валидации формы обратной связи ---
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  // Отменяем стандартную перезагрузку страницы при отправке формы
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  
  let isValid = true;
  
  // Проверка поля Имя на пустоту
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else {
    nameError.textContent = "";
  }
  
  // Проверка формата Email через регулярное выражение
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else {
    emailError.textContent = "";
  } 
  
  // Если всё заполнено верно
  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset(); // Очищаем поля формы
  }
});