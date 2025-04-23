// ---  инпут
import { Field, ErrorMessage as Error, useFormikContext } from "formik";

export const Input = ({ id, label, name, placeholder }) => {
  const { setFieldValue } = useFormikContext(); // получаем метод для ручной установки значения

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  return (
    <div>
      <label className="text-sm" htmlFor={id || name}>
        {label}
      </label>
      <Field
        id={id || name}
        name={name}
        placeholder={placeholder}
        className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
        onChange={handleChange} // 👈 перехватываем onChange
      />
      <Error name={name}>
        {(error) => <span className="text-red-500 text-ms">{error}</span>}
      </Error>
    </div>
  );
};
