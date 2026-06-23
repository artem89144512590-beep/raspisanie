// Этап 4. Первый JavaScript
// Вывод приветственного сообщения в консоль разработчика
console.log("Привет! Скрипт подключен и работает.");

// Поиск элемента по ID и добавление текущей даты
const dateSpan = document.getElementById("update-date");
const today = new Date();

// Форматируем дату в локальный российский формат (ДД.ММ.ГГГГ)
dateSpan.textContent = today.toLocaleDateString("ru-RU");