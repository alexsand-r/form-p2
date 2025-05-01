// инпут тип файл

import React, { useRef, useEffect, useState } from "react";
import { useField } from "formik";

export const InputFile = ({ label, name }) => {
  const [field, , helpers] = useField(name);
  const inputRef = useRef();
  const [fileName, setFileName] = useState("Файл не вибрано");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      helpers.setValue(imageUrl);
      setFileName(file.name);
    } else {
      helpers.setValue("");
      setFileName("Файл не вибрано");
    }
  };

  useEffect(() => {
    if (!field.value && inputRef.current) {
      inputRef.current.value = "";
      setFileName("Файл не вибрано");
    }
  }, [field.value]);

  return (
    <div>
      <label className="text-sm block">{label}</label>
      <div
        onClick={() => inputRef.current.click()}
        className="cursor-pointer shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-500 rounded-lg px-2.5 py-2 hover:border-blue-500"
      >
        {fileName}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};
