## вручную создать и заполнить data.json ✏️

🔹 data.json, положить в проект (например, в public/ или src/data/)
🔹 При запуске React-приложения загрузить этот файл в Redux-массив employeeArr
🔹 А уже потом, при добавлении сотрудников, добавлять в Redux-массив — но не обязательно обратно в файл

📌 #
🔹можно читать data.json, но не нельзя из React напрямую его изменять — потому что React работает в браузере и не имеет прав на файловую систему
🔹Поэтому data.json будет как начальный источник данных, только для чтения.

# 🔸 Шаг 1: Помести data.json в public/ 👉

# 🔸 Шаг 2: Создай Redux thunk для загрузки

// employeeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadEmployeesFromJSON = createAsyncThunk(
"employee/loadEmployeesFromJSON",
async () => {
const response = await fetch("/data.json");
return await response.json(); // вернет массив сотрудников
}
);

# 🔸 Шаг 3: Загрузи данные при старте приложения
