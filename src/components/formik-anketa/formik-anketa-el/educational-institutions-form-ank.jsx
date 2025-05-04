//---educationalInstitutions (навчальні заклади)
import React from "react";
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const EducationalInstitutionsFormAnk = React.memo(() => {
  return (
    <>
      {/* шапка таблицы Освита */}
      <div className="px-2 bg-[var(--main-bg-color)]  text-sm grid grid-cols-[55%_30%_15%] pt-2 mb-0.5">
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-l border-gray-700">
          Назва освітнього закладу
        </div>
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
          Диплом (свідоцтво), серія, номер
        </div>
        <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
          Рік закінчення
        </div>
      </div>

      {/* Навчальні заклади */}
      <FieldArray name="educationalInstitutions">
        {({ push, remove, form }) => (
          <>
            {form.values.educationalInstitutions.map((_, index) => (
              <div
                key={index}
                className="px-2 grid grid-cols-[55%_30%_15%] gap-x-0.5 mb-7"
              >
                <div className="relative">
                  <Input
                    name={`educationalInstitutions[${index}].name`}
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
                  name={`educationalInstitutions[${index}].documentNumber`}
                  placeholder="..."
                />
                <MyAirDatepicker
                  name={`educationalInstitutions[${index}].graduationYear`}
                  placeholder="..."
                  format="yyyy"
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
