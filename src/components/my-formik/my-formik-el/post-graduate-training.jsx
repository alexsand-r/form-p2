// -- post-graduate training (після дипломна підготовка)

import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "../my-formik-el/input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const PostGraduate = () => {
  return (
    <>
      <h2 className="text-lg text-center mt-4">
        Післядипломна професійна підготовка: <br /> навчання в аспірантурі
        ад'юнктурі докторантурі (необхідне відмітити - X)
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-1 gap-x-4 mb-4 w-[300px]">
          <Input label="аспірантурі:" name="graduateSchool" placeholder="..." />
          <Input label="ад'юнктурі:" name="adjunct" placeholder="..." />

          <Input
            label="докторантурі"
            name="doctoralStudies"
            placeholder="..."
          />
        </div>
      </div>
      <div>
        {/* після дипломна підготовка таблица */}

        <FieldArray name="postgraduateProfessional">
          {({ push, remove, form }) => (
            <>
              {form.values.postgraduateProfessional.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[30%_20%_12%_35%] gap-1 gap-x-1 mb-2"
                >
                  <div className="relative">
                    <Input
                      label="Назва освітнього, наукового  закладу:"
                      name={`postgraduateProfessional[${index}].name`}
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
                    label="Диплом, номер:"
                    name={`postgraduateProfessional[${index}].documentNumber`}
                    placeholder="..."
                  />
                  <MyAirDatepicker
                    label="Рік закінчення"
                    name={`postgraduateProfessional[${index}].graduationYear`}
                    placeholder="..."
                    format="yyyy"
                  />
                  <Input
                    label="Науковий ступінь, учене звання:"
                    name={`postgraduateProfessional[${index}].academicBegree`}
                    placeholder="..."
                  />
                </div>
              ))}
              <div className="relative group inline-block">
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
      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
};
