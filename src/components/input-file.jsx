// инпут тип файл (это старый код )
// без base64
import React, { useRef, useEffect, useState } from "react";
import { useField } from "formik";
import defaultPhoto from "/public/photo.svg"; // обязательно импортируй

export const InputFile = ({ label, name }) => {
  const [field, , helpers] = useField(name);
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState(defaultPhoto); // путь к фото
  const [fileName, setFileName] = useState("Файл не вибрано");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      helpers.setValue(url); // сохраняем в formik
      setImageUrl(url); // сохраняем ссылку на картинку
      setFileName(file.name);
    } else {
      helpers.setValue("");
      setImageUrl(defaultPhoto);
      setFileName("Файл не вибрано");
    }
  };

  useEffect(() => {
    if (field.value) {
      // если это URL, а не File
      setImageUrl(field.value);
      const fileNameFromUrl = field.value.split("/").pop();
      setFileName(fileNameFromUrl);
    } else {
      setImageUrl(defaultPhoto);
      setFileName("Файл не вибрано");
    }
  }, [field.value]);

  return (
    <div>
      {label && <label className="text-sm block mb-1">{label}</label>}
      <div
        onClick={() => inputRef.current.click()}
        className="relative w-[115px] h-[143px] cursor-pointer shadow-md bg-gray-50 border-2 border-gray-300 text-gray-500 rounded-lg overflow-hidden hover:border-blue-500"
      >
        <img
          src={imageUrl}
          alt="Фото"
          className={`absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 ${
            imageUrl === defaultPhoto ? "w-1/2 h-1/2" : "w-full h-full"
          }`}
        />
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        name={name}
      />
    </div>
  );
};
// новый код где фото грузится в формате base64
// import React, { useRef, useEffect, useState } from "react";
// import { useField } from "formik";
// import defaultPhoto from "/public/photo.svg"; // обязательно импортируй

// // Функция для преобразования файла в base64
// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// export const InputFile = ({ label, name }) => {
//   const [field, , helpers] = useField(name);
//   const inputRef = useRef();
//   const [imageUrl, setImageUrl] = useState(defaultPhoto); // путь к фото
//   const [fileName, setFileName] = useState("Файл не вибрано");

//   const handleChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       try {
//         const base64 = await convertToBase64(file); // 📌 Конвертация в base64
//         helpers.setValue(base64); // Сохраняем base64 в Formik
//         setImageUrl(base64); // Отображаем изображение
//         setFileName(file.name);
//       } catch (err) {
//         console.error("Ошибка при конвертации в base64:", err);
//       }
//     } else {
//       helpers.setValue("");
//       setImageUrl(defaultPhoto);
//       setFileName("Файл не вибрано");
//     }
//   };

//   useEffect(() => {
//     if (field.value) {
//       setImageUrl(field.value);
//       const fileNameFromValue = field.value.includes("base64")
//         ? "Загруженное изображение"
//         : field.value.split("/").pop();
//       setFileName(fileNameFromValue);
//     } else {
//       setImageUrl(defaultPhoto);
//       setFileName("Файл не вибрано");
//     }
//   }, [field.value]);

//   return (
//     <div>
//       {label && <label className="text-sm block mb-1">{label}</label>}
//       <div
//         onClick={() => inputRef.current.click()}
//         className="relative w-[115px] h-[143px] cursor-pointer shadow-md bg-gray-50 border-2 border-gray-300 text-gray-500 rounded-lg overflow-hidden hover:border-blue-500"
//       >
//         <img
//           src={imageUrl}
//           alt="Фото"
//           className={`absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 ${
//             imageUrl === defaultPhoto ? "w-1/2 h-1/2" : "w-full h-full"
//           }`}
//         />
//       </div>

//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         onChange={handleChange}
//         className="hidden"
//         name={name}
//       />
//       <p className="mt-1 text-xs text-gray-500">{fileName}</p>
//     </div>
//   );
// };
