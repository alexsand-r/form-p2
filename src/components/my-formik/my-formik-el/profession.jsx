//--profession (Спеціальність / професія)

import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "../my-formik-el/input";
import { SelectField } from "../../customStylesSelect/selectField";
import {
  customStyles,
  formOfStudy,
} from "../../customStylesSelect/customStyles";
import { SelectField2 } from "../../customStylesSelect/selectField2";

export const Profession = () => {
  return (
    <>
      <h2 className="text-lg text-center mt-4">
        Спеціальність (професія) за дипломом
      </h2>
      <FieldArray name="profession">
        {({ push, remove, form }) => (
          <>
            {form.values.profession.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-[50%_30%_19%] gap-1 gap-x-1 mb-2"
              >
                <div className="relative">
                  <Input
                    label="Професія:"
                    name={`profession[${index}].profes`}
                    placeholder="..."
                  />
                  {index > 0 && (
                    <div className="absolute -bottom-[50%] right-2 group">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="bg-transparent"
                      >
                        <img src={minus} alt="minus" />
                      </button>
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm py-1 px-2 rounded shadow-lg text-nowrap">
                        Видалити рядок
                      </div>
                    </div>
                  )}
                </div>

                <Input
                  label="Кваліфікація:"
                  name={`profession[${index}].qualification`}
                  placeholder="..."
                />
                <SelectField2
                  label="Форма навчання"
                  name={`profession[${index}].formOfStudy`}
                  options={formOfStudy}
                  styles={customStyles}
                  placeholder="..."
                />
              </div>
            ))}
            <div className="relative group inline-block">
              <button
                type="button"
                onClick={() =>
                  push({ profes: "", qualification: "", formOfStudy: "" })
                }
                className="bg-transparent"
              >
                <img src={plus} alt="plus" />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Додати рядок
              </div>
            </div>
          </>
        )}
      </FieldArray>
    </>
  );
};
