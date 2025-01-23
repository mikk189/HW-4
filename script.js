// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".let field2 = "значення 1";
let field1 = "значення 1";
let field2 = "значення 2";

if (field1 && field2) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// Створити розмітку з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
let field3 = 2;
let field4 = 3;

let sum = field3 + field4;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
// Створити розмітку з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
// без html
let inputText = "JavaScript";
if (inputText.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20". Javascript без html
const number = prompt("Введіть число:");

if (number > 10 && number < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
const name = prompt("Введіть ім'я (мінімум 3 символи):");
const email = prompt("Введіть email:");
const password = prompt("Введіть пароль (мінімум 6 символів):");

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  alert("Дані введено правильно. Перенаправляємо...");
} else {
  alert("Помилка: перевірте правильність введених даних.");
}
