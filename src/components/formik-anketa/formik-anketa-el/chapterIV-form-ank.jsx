// -- chapterIVForm.jsx;
import React from "react";
import { FieldArray } from "formik";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterIVFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold">IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ</p>
        <div className="text-sm grid grid-cols-[15%_1fr_13%_13%_13%_13%_13%] mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Дата
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Назва структурного підрозділу
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Професія, посада назва
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Професія, посада код за КП*
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Розряд (оклад)
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підпис працівника
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="mt-0.5">
        <FieldArray name="assignmentAndTransfer">
          {({ push, remove, form }) => (
            <>
              {form.values.assignmentAndTransfer.map((_, index) => (
                <div
                  key={index}
                  className="px-2 grid grid-cols-[15%_1fr_13%_13%_13%_13%_13%] mb-7"
                >
                  <MyAirDatepicker
                    name={`assignmentAndTransfer[${index}].dateOfstudy`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <Input
                    name={`assignmentAndTransfer[${index}].nameStructuralUnit`}
                    placeholder="..."
                  />
                  <Input
                    name={`assignmentAndTransfer[${index}].professionName`}
                    placeholder="..."
                  />
                  {/* codeForCP */}
                  <Input
                    name={`assignmentAndTransfer[${index}].codeForCP`}
                    placeholder="..."
                  />
                  {/* salary */}
                  <Input
                    name={`assignmentAndTransfer[${index}].salary`}
                    placeholder="..."
                  />
                  {/* groundOrder */}
                  <Input
                    name={`assignmentAndTransfer[${index}].groundOrder`}
                    placeholder="..."
                  />
                  <div className="relative">
                    <Input
                      name={`assignmentAndTransfer[${index}].employeeSignatur`}
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
                </div>
              ))}
              <div className="relative group inline-block ml-3">
                <button
                  type="button"
                  onClick={() =>
                    push({
                      dateOfstudy: "", // дата окончания обучения
                      nameStructuralUnit: "", // Назва структурного підрозділу
                      professionName: "", // професія назва
                      codeForCP: "", // код за КП
                      salary: "", // Розряд (оклад)
                      groundOrder: "", //Підстава, наказ N
                      employeeSignatur: "", //Підпис працівника
                    })
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
        <p className="text-[11px]">
          * Відповідно до Класифікатора професій ДК 003-2005, затвердженого
          наказом Держстандарту України від 26.12.2005 N 375, з урахуванням
          позначки кваліфікаційного рівня (6 знаків, наприклад, код професії
          "муляр" - 7122.2).
        </p>
      </div>
    </>
  );
});
