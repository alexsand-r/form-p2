// -- post-graduate training (після дипломна підготовка)
import React from "react";
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const PostGraduateFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 text-sm">
        <div className="flex gap-6 mb-4">
          <p className="flex items-end">
            5. Післядипломна професійна підготовка: навчання
          </p>
          <div className="flex gap-x-5 items-center">
            <div className="flex items-center justify-center h-3 w-3">
              <Input name="graduateSchool" placeholder="..." />
            </div>
            в аспірантурі
            <div className="flex items-center justify-center h-3 w-3">
              <Input name="adjunct" placeholder="..." />
            </div>
            ад'юнктурі
            <div className="flex items-center justify-center h-3 w-3">
              <Input name="doctoralStudies" placeholder="..." />
            </div>
            докторантурі (необхідне відмітити х)
          </div>
        </div>

        <div className="text-sm grid grid-cols-[30%_20%_12%_1fr] pt-2 mb-0.5">
          <div className="font-bold text-center py-0.5 border-b border-r border-t border-l border-gray-700">
            Назва освітнього, наукового закладу
          </div>
          <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
            Диплом, номер, дата видачі
          </div>
          <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
            Рік закінчення
          </div>
          <div className="font-bold text-center py-0.5 border-b border-r border-t border-gray-700">
            Науковий ступінь, учене звання
          </div>
        </div>
        {/* тут мапить */}
        {/* строка */}
      </div>

      <div>
        {/* після дипломна підготовка таблица */}

        <FieldArray name="postgraduateProfessional">
          {({ push, remove, form }) => (
            <>
              {form.values.postgraduateProfessional.map((_, index) => (
                <div
                  key={index}
                  className="px-2 grid grid-cols-[30%_20%_12%_1fr] mb-7"
                >
                  <div className="relative">
                    <Input
                      name={`postgraduateProfessional[${index}].name`}
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
                    name={`postgraduateProfessional[${index}].documentNumber`}
                    placeholder="..."
                  />
                  <MyAirDatepicker
                    name={`postgraduateProfessional[${index}].graduationYear`}
                    placeholder="..."
                    format="yyyy"
                  />
                  <Input
                    name={`postgraduateProfessional[${index}].academicBegree`}
                    placeholder="..."
                  />
                </div>
              ))}
              <div className="relative group inline-block ml-3">
                <button
                  type="button"
                  onClick={() =>
                    push({
                      name: "",
                      documentNumber: "",
                      graduationYear: "",
                      academicBegree: "",
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
