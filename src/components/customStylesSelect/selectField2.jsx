// -- selectField2.jsx (этот селект для блока Спеціальність (професія) за дипломом вибор формы навчання денна  - заочна ....)
import { Field } from "formik";
import Select from "react-select";

export const SelectField2 = ({ label, name, options, styles, placeholder }) => (
  <div>
    <label className="text-sm block" htmlFor={name}>
      {label}
    </label>
    <Field name={name}>
      {({ field, form }) => (
        <Select
          {...field}
          inputId={name}
          options={options}
          styles={styles}
          placeholder={placeholder}
          onChange={(selectedOption) => {
            form.setFieldValue(
              name,
              selectedOption ? selectedOption.value : ""
            );
          }}
          value={options.find((option) => option.value === field.value) || null}
        />
      )}
    </Field>
  </div>
);
