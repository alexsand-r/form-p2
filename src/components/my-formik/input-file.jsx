// инпут тип файл

import React from "react";
import { useField } from "formik";

export const InputFile = ({ label, name }) => {
  const [, , helpers] = useField(name);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      helpers.setValue(imageUrl); // сохраняем превью URL
    }
  };

  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-500 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
      />
    </div>
  );
};
