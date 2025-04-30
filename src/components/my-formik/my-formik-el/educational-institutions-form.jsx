//---educationalInstitutions (навчальні заклади)
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const EducationalInstitutionsForm = () => {
  return (
    <>
      {/* Навчальні заклади */}
      <h2 className="text-lg text-center mt-4">5. Навчальні заклади</h2>
      <FieldArray name="educationalInstitutions">
        {({ push, remove, form }) => (
          <>
            {form.values.educationalInstitutions.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-[50%_30%_19%] gap-1 gap-x-1 mb-2"
              >
                <div className="relative">
                  <Input
                    label="Назва закладу:"
                    name={`educationalInstitutions[${index}].name`}
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
                  label="Диплом серія, номер"
                  name={`educationalInstitutions[${index}].documentNumber`}
                  placeholder="..."
                />
                <MyAirDatepicker
                  label="Рік закінчення"
                  name={`educationalInstitutions[${index}].graduationYear`}
                  placeholder="..."
                  format="yyyy"
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
      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
};
