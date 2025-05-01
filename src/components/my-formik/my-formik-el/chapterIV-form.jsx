// -- chapterIVForm.jsx;
import React from "react";
import { FieldArray } from "formik";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterIVForm = React.memo(() => {
  return (
    <>
      <div className="mt-3">
        <h2 className="text-lg text-center mt-4">
          IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
        </h2>
        <FieldArray name="assignmentAndTransfer">
          {({ push, remove, form }) => (
            <>
              {form.values.assignmentAndTransfer.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-1 gap-x-1 mb-2"
                >
                  <MyAirDatepicker
                    label="Дата"
                    name={`assignmentAndTransfer[${index}].dateOfstudy`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <Input
                    label="Назва структурного підрозділу:"
                    name={`assignmentAndTransfer[${index}].nameStructuralUnit`}
                    placeholder="..."
                  />
                  <Input
                    label="Професія, посада (назва):"
                    name={`assignmentAndTransfer[${index}].professionName`}
                    placeholder="..."
                  />
                  {/* codeForCP */}
                  <Input
                    label="код за КП:"
                    name={`assignmentAndTransfer[${index}].codeForCP`}
                    placeholder="..."
                  />
                  {/* salary */}
                  <Input
                    label="Розряд (оклад):"
                    name={`assignmentAndTransfer[${index}].salary`}
                    placeholder="..."
                  />
                  {/* groundOrder */}
                  <Input
                    label="Підстава, наказ N:"
                    name={`assignmentAndTransfer[${index}].groundOrder`}
                    placeholder="..."
                  />
                  <div className="relative">
                    <Input
                      label="Підпис працівника:"
                      name={`assignmentAndTransfer[${index}].employeeSignatur`}
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
                </div>
              ))}
              <div className="relative group inline-block">
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
        <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
      </div>
    </>
  );
});
