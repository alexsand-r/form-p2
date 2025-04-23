import { useRef, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import AirDatepicker from "air-datepicker/air-datepicker";
import "air-datepicker/air-datepicker.css";

export const MyAirDatepicker = ({
  id,
  label,
  name,
  placeholder,
  format = "dd.MM.yyyy",
}) => {
  const inputRef = useRef(null);
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const dpRef = useRef(null);

  useEffect(() => {
    dpRef.current = new AirDatepicker(inputRef.current, {
      onSelect: ({ date }) => {
        if (date) {
          const formattedDate =
            format === "yyyy"
              ? date.getFullYear().toString()
              : date.toLocaleDateString("ru-RU");
          setFieldValue(name, formattedDate);
        }
      },
      autoClose: true,
      dateFormat: format,
      view: format === "yyyy" ? "years" : "days",
      minView: format === "yyyy" ? "years" : "days",
    });

    return () => {
      dpRef.current?.destroy();
    };
  }, [name, setFieldValue, format]);

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, ".");
    setFieldValue(name, value);

    if (format === "yyyy") {
      const year = parseInt(value, 10);
      if (!isNaN(year) && value.length === 4 && year >= 1000 && year <= 9999) {
        const parsedDate = new Date(year, 0, 1);
        if (!isNaN(parsedDate.getTime())) {
          dpRef.current?.selectDate(parsedDate);
        }
      }
    } else {
      const isValidFormat = /^\d{2}\.\d{2}\.\d{4}$/.test(value);
      if (isValidFormat) {
        const [day, month, year] = value.split(".");
        const parsedDate = new Date(year, month - 1, day);
        if (!isNaN(parsedDate.getTime())) {
          dpRef.current?.selectDate(parsedDate);
        }
      }
    }
  };

  return (
    <div>
      <label className="text-sm block" htmlFor={id || name}>
        {label}
      </label>
      <input
        id={id || name}
        name={name}
        type="text"
        ref={inputRef}
        value={field.value}
        onChange={handleChange}
        placeholder={placeholder}
        className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

// красит бордер в красный цвет
//   className={`shadow-md text-lg bg-gray-50 border-2 rounded-lg w-full px-2.5 py-2
//   ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"}
//   focus:border-blue-500`}
