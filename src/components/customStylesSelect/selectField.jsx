// костомный селект
//---SelectField

//-------------------------------------------------------------------------------
// тут ошибки показывает, селекты в стать и вид занятости работают ( не работает селек в образовании дневное и заочное)
import { useFormikContext } from "formik";
import Select from "react-select";

export const SelectField = ({ name, label, options, styles, placeholder }) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  const handleChange = (option) => {
    setFieldValue(name, option.value);
  };

  return (
    <div>
      {label && (
        <label className="text-sm inline-block" htmlFor={name}>
          {label}
        </label>
      )}
      <Select
        name={name}
        options={options}
        styles={styles}
        placeholder={placeholder}
        value={options.find((opt) => opt.value === values[name]) || null}
        onChange={handleChange}
      />
      {touched[name] && errors[name] && (
        <div className="text-red-500 text-ms">{errors[name]}</div>
      )}
    </div>
  );
};
