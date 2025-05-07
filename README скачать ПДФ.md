## ❗️ скачать пдф файл анкети

# 1. установить Библиотеку: html2pdf.js

npm install --save html2pdf.js ⬅️

# 2. добавить в файл где анкета (у меня это item-card.jsx) импорт

import html2pdf from "html2pdf.js";

# 3. 🔧 Добавь функцию handleDownloadPDF

(Ниже внутри компонента ItemCard, перед return, вставь:)

<!-- const handleDownloadPDF = () => {
  const element = document.getElementById("pdf-content");
  if (!element) return;

  html2pdf()
    .from(element)
    .set({
      margin: 0.5,
      filename: "anketa.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .save();
}; -->

# 4. 🧱 Оберни весь контент анкеты в <div id="pdf-content">

<div id="pdf-content" className="shadow-md max-w-[824px] mx-auto">

# 5. 🖱️ Добавь кнопку для скачивания PDF (я делаю отдельным компонентом, у меня это DownloadPDFButton)

<button
onClick={handleDownloadPDF}
type="button"
className="bg-green-500 py-0.5 px-1 rounded-md text-white hover:bg-green-600 transition-bg duration-300 ml-2"

> завантажити PDF
> </button>
