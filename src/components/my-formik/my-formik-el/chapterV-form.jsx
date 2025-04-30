// -- chapterIV-form.jsx
import { FieldArray } from "formik";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const ChapterVForm = () => {
  return (
    <>
      <div className="mt-3">
        <h2 className="text-lg text-center mt-4">V. ВІДПУСТКИ</h2>
        <FieldArray name="vacations">
          {({ push, remove, form }) => (
            <>
              {form.values.vacations.map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-1 gap-x-1 mb-2"
                >
                  <Input
                    label="Вид відпустки :"
                    name={`vacations[${index}].typeOfVacation`}
                    placeholder="..."
                  />
                  <MyAirDatepicker
                    label="За який період з "
                    name={`vacations[${index}].forWhatPeriodStart`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <MyAirDatepicker
                    label="За який період по"
                    name={`vacations[${index}].forWhatPeriodEnd`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <MyAirDatepicker
                    label="Дата початку відпустки "
                    name={`vacations[${index}].vacationStartDate`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />
                  <MyAirDatepicker
                    label="Дата закінчення відпустки"
                    name={`vacations[${index}].vacationEndDate`}
                    placeholder="..."
                    format="dd.MM.yyyy"
                  />

                  <div className="relative">
                    <Input
                      label="Підстава, наказ N:"
                      name={`vacations[${index}].groundOrder`}
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
        <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
      </div>
    </>
  );
};
