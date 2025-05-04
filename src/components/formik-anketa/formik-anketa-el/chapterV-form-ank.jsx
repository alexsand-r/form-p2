// -- chapterIV-form.jsx
import React from "react";
import { FieldArray } from "formik";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterVFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold mb-2">V. ВІДПУСТКИ</p>
        <div className="text-sm grid grid-cols-[25%_30%_1fr_1fr_15%] mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Вид відпустки
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            За який період
          </div>

          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Дата початку відпустки
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Дата закінчення відпустки
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
          </div>
        </div>
      </div>
      <div className="mt-0.5">
        <FieldArray name="vacations">
          {({ push, remove, form }) => (
            <>
              {form.values.vacations.map((_, index) => (
                <div
                  key={index}
                  className="px-2 grid grid-cols-[25%_30%_1fr_1fr_15%] mb-7"
                >
                  <Input
                    name={`vacations[${index}].typeOfVacation`}
                    placeholder="..."
                  />
                  <div className="flex justify-between">
                    <MyAirDatepicker
                      name={`vacations[${index}].forWhatPeriodStart`}
                      placeholder="..."
                      format="dd.MM.yyyy"
                    />
                    <MyAirDatepicker
                      name={`vacations[${index}].forWhatPeriodEnd`}
                      placeholder="..."
                      format="dd.MM.yyyy"
                    />
                  </div>

                  <MyAirDatepicker
                    name={`vacations[${index}].vacationStartDate`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <MyAirDatepicker
                    name={`vacations[${index}].vacationEndDate`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />

                  <div className="relative">
                    <Input
                      name={`vacations[${index}].groundOrder`}
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
                      typeOfVacation: "", // Вид відпустки
                      forWhatPeriodStart: "", // За який період с
                      forWhatPeriodEnd: "", // За який період по
                      vacationStartDate: "", // Дата початку відпустки
                      vacationEndDate: "", //  Дата закінчення відпустки
                      groundOrder: "", //Підстава, наказ N
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
      </div>
    </>
  );
});
