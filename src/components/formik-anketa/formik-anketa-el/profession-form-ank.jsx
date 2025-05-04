//--profession (Спеціальність / професія)
import React from "react";
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "../../input";

import {
  customStyles,
  formOfStudy,
} from "../../customStylesSelect/customStyles";
import { SelectField2 } from "../../customStylesSelect/selectField2";

export const ProfessionFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 text-sm grid grid-cols-[55%_30%_15%] pt-2 mb-0.5">
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-l border-gray-700">
          Спеціальність (професія) за дипломом (свідоцтвом)
        </div>
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
          Кваліфікація за дипломом (свідоцтвом)
        </div>
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
          Форма навчання (денна, вечірня, заочна)
        </div>
      </div>

      <FieldArray name="profession">
        {({ push, remove, form }) => (
          <>
            {form.values.profession.map((_, index) => (
              <div
                key={index}
                className="px-2 grid grid-cols-[55%_30%_15%] gap-x-0.5 mb-7"
              >
                <div className="relative">
                  <Input
                    name={`profession[${index}].profes`}
                    placeholder="..."
                  />
                  {index > 0 && (
                    <div className="absolute -bottom-[95%] right-2 group z-10">
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
                  name={`profession[${index}].qualification`}
                  placeholder="..."
                />
                <SelectField2
                  name={`profession[${index}].formOfStudy`}
                  options={formOfStudy}
                  styles={customStyles}
                  placeholder="..."
                />
              </div>
            ))}
            <div className="relative group inline-block ml-3">
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
});
