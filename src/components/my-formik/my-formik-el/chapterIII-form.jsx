//-- chapterIIIForm
import React from "react";
import { FieldArray } from "formik";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { SelectField2 } from "../../customStylesSelect/selectField2";
import {
  customStyles,
  formOfStudy,
} from "../../customStylesSelect/customStyles";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterIIIForm = React.memo(() => {
  return (
    <>
      <div className="mt-3">
        <h2 className="text-lg text-center mt-4">
          ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК
          ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        </h2>
        <FieldArray name="onTheJob">
          {({ push, remove, form }) => (
            <>
              {form.values.onTheJob.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-1 gap-x-1 mb-2"
                >
                  <MyAirDatepicker
                    label="Дата"
                    name={`onTheJob[${index}].dateOfstudy`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />

                  <Input
                    label="Назва структурного підрозділу:"
                    name={`onTheJob[${index}].nameStructuralUnit`}
                    placeholder="..."
                  />
                  <MyAirDatepicker
                    label="Період навчання з"
                    name={`onTheJob[${index}].trainingPeriodWith`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <MyAirDatepicker
                    label="Період навчання по"
                    name={`onTheJob[${index}].trainingPeriod`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <Input
                    label="Вид навчання:"
                    name={`onTheJob[${index}].typeOfTraining`}
                    placeholder="..."
                  />
                  <SelectField2
                    label="Форма навчання"
                    name={`onTheJob[${index}].formOfStudy`}
                    options={formOfStudy}
                    styles={customStyles}
                    placeholder="..."
                  />

                  <div className="relative">
                    <Input
                      label="Назва документа, що посвідчує професійну освіту, ким виданий:"
                      name={`onTheJob[${index}].documentCertifyingProfessional`}
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
        <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
      </div>
    </>
  );
});
