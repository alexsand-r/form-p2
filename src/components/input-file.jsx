// инпут тип файл

// import React, { useRef, useEffect, useState } from "react";
// import { useField } from "formik";

// export const InputFile = ({ label, name }) => {
//   const [field, , helpers] = useField(name);
//   const inputRef = useRef();
//   const [fileName, setFileName] = useState("../../../../public/photo.svg");

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       helpers.setValue(imageUrl);
//       setFileName(file.name);
//     } else {
//       helpers.setValue("");
//       setFileName("Файл не вибрано");
//     }
//   };

//   useEffect(() => {
//     if (!field.value && inputRef.current) {
//       inputRef.current.value = "";
//       setFileName("Файл не вибрано");
//     }
//   }, [field.value]);

//   return (
//     <div>
//       <label className="text-sm block">{label}</label>
//       <div
//         onClick={() => inputRef.current.click()}
//         className="w-[115px] h-[143px] cursor-pointer shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-500 rounded-lg px-2.5 py-2 hover:border-blue-500"
//       >
//         {fileName}
//       </div>
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         onChange={handleChange}
//         className="hidden"
//       />
//     </div>
//   );
// };
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

  // useEffect(() => {
  //   if (!field.value && inputRef.current) {
  //     inputRef.current.value = "";
  //     setFileName("Файл не вибрано");
  //     setImageUrl(defaultPhoto);
  //   }
  // }, [field.value]);
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
