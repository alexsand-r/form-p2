# React + Vite

https://www.buhoblik.org.ua/normativka/001/buh0385.html

адаптивное изображение

<div class="relative pb-[124%]">
    <img alt="photo" class="absolute top-0 left-0 w-full h-full object-cover" src="/public/screenshot_2.png">
</div>

# использую библиотеку air-datepicker в React 🔥

Шаг 1: Установка
npm install air-datepicker

Шаг 2: Импорт стилей и JS
import { useEffect, useRef } from "react";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

Шаг 3:
создаю компонент с календарем
import React, { useRef, useEffect } from "react";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export default function MyAirDatepicker({ onDateSelect }) {
const inputRef = useRef(null);

useEffect(() => {
const dp = new AirDatepicker(inputRef.current, {
onSelect: ({ date }) => {
onDateSelect && onDateSelect(date);
},
autoClose: true,
dateFormat: 'dd.MM.yyyy',
});

    return () => dp.destroy(); // Очистка при размонтировании

}, []);

return (
<input
      type="text"
      ref={inputRef}
      placeholder="Выберите дату"
      className="border p-2 rounded"
    />
);
}

# делаю стили через переменный 🔥

в файле index.css добавить в рут

@import "tailwindcss";

#root {
width: 100%;
max-width: 824px;
padding: 0 15px;

--main-color-line: #b9babc; // 👉 вот это добавил
}

👉 <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div> // так в компоненте 🚀
👉 bg-[var(--main-bg-color)]

---

## ⚠️ ПРОБЛЕМА ПРИ РЕДАКТИРОВАНИИ НЕ ОТРАЖАЛИСЬ ДАННЫЕ В ФОРМЕ

✅ Решение

1. Используй динамическое начальное значение формы:
   <Formik
   onSubmit={addEmployeeInList}
   initialValues={itemToEdit || initialValues} // 💡
   validationSchema={validationSchema}
   enableReinitialize={true}
   > ✅ Теперь initialValues будет обновляться, когда изменится itemToEdit, и Formik правильно "реинициализирует" форму.

---
