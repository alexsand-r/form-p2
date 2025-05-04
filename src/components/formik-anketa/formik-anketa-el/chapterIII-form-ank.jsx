//-- chapterIIIForm
import React from "react";
import { FieldArray } from "formik";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { SelectField2 } from "../../customStylesSelect/selectField2";
import {
  customStyles,
  formOfStudy,
} from "../../customStylesSelect/customStyles";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterIIIFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold mb-3">
          ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК
          ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        </p>
        <div className="text-sm grid grid-cols-[15%_15%_1fr_15%_10%_15%] mb-0.5">
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Дата
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Назва структурного підрозділу
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Період навчання
            <div className="flex justify-between">
              <div className="pl-10">з</div>
              <div className="pr-10">по</div>
            </div>
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Вид навчання
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Форма навчання
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Назва документа, що посвідчує професійну освіту, ким виданий
          </div>
        </div>
      </div>

      {/* ------ */}
      <div className="mt-0.5">
        <FieldArray name="onTheJob">
          {({ push, remove, form }) => (
            <>
              {form.values.onTheJob.map((_, index) => (
                <div
                  key={index}
                  className="px-2 grid grid-cols-[15%_15%_1fr_15%_10%_15%] mb-7"
                >
                  <MyAirDatepicker
                    name={`onTheJob[${index}].dateOfstudy`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />

                  <Input
                    name={`onTheJob[${index}].nameStructuralUnit`}
                    placeholder="..."
                  />
                  <div className="flex justify-between">
                    <MyAirDatepicker
                      name={`onTheJob[${index}].trainingPeriodWith`}
                      placeholder="..."
                      format="dd.MM.yyyy"
                    />
                    <MyAirDatepicker
                      name={`onTheJob[${index}].trainingPeriod`}
                      placeholder="..."
                      format="dd.MM.yyyy"
                    />
                  </div>

                  <Input
                    name={`onTheJob[${index}].typeOfTraining`}
                    placeholder="..."
                  />
                  <SelectField2
                    name={`onTheJob[${index}].formOfStudy`}
                    options={formOfStudy}
                    styles={customStyles}
                    placeholder="..."
                  />

                  <div className="relative">
                    <Input
                      name={`onTheJob[${index}].documentCertifyingProfessional`}
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
                      dateOfstudy: "",
                      nameStructuralUnit: "",
                      trainingPeriodWith: "",
                      trainingPeriod: "",
                      typeOfTraining: "",
                      onTheJobTraining: "",
                      documentCertifyingProfessional: "",
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
