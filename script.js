// --- НОВОЕ ПО ПР 7: Массив объектов проектов (минимум 5 штук) ---
const projects = [
  { 
    id: 1, 
    title: "Сайт-визитка кондитерской", 
    category: "frontend", 
    description: "Разработчик: Артём. Адаптивный сайт для школьного расписания. Свёрстан с использованием Flexbox и Grid." 
  },
  { 
    id: 2, 
    title: "Интерактивный список задач (Todo App)", 
    category: "frontend", 
    description: "Разработчик: Артём. Веб-приложение для расписания." 
  },
  { 
    id: 3, 
    title: "Разработка сайта «Ресторан»", 
    category: "frontend", 
    description: "Разработчик: Ангелина. Просмотр блюд и онлайн-бронирование столиков с удобным интерфейсом." 
  },
  { 
    id: 4, 
    title: "Дизайн-макет веб-портфолио", 
    category: "design", 
    description: "Разработчик: Ангелина. Придумала дизайн и нарисовала его в PhotoShop." 
  },
  { 
    id: 5, 
    title: "Фирменный стиль IT-команды", 
    category: "design", 
    description: "Разработчик: Артём. Разработка сайта, цветовой палитры и стандартов оформления интерфейсов." 
  }
];

// --- НОВОЕ ПО ПР 7: Функции динамической генерации карточек ---
function createCard(project) {
  return `
    <article class="project-card" data-category="${project.category}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `;
}

function renderProjects(list) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = list.map(createCard).join("");
}

// Первичный вывод всех карточек при загрузке
renderProjects(projects);

// --- НОВОЕ ПО ПР 7: Логика фильтрации по кнопкам-категориям ---
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const filter = btn.dataset.filter;
    const filtered = filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);
      
    renderProjects(filtered);
  });
});

// --- НОВОЕ ПО ПР 7: Логика живого поиска по названию ---
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  
  renderProjects(filtered);
});


// --- ИЗ ПРОШЛЫХ ПР: Логика даты и темной темы ---
console.log("Привет! Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// --- ИЗ ПРОШЛЫХ ПР: Бургер-меню ---
const navLinks = document.querySelectorAll("nav a");
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("open");
  });
});

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// --- ИЗ ПРОШЛЫХ ПР: Кнопка Показать больше ---
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
});

// --- ИЗ ПРОШЛЫХ ПР: Валидация формы ---
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  
  let isValid = true;
  
  if (nameInput && nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else if (nameError) {
    nameError.textContent = "";
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput && !emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else if (emailError) {
    emailError.textContent = "";
  }
  
  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset();
  }
});