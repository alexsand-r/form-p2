//-- point10
import React from "react";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const Point10Form = React.memo(() => {
  return (
    <>
      <h2 className="text-lg text-center">10. Родинний стан</h2>
      <div className="mb-4">
        <Input label="Родинний стан:" name="maritalStatus" placeholder="..." />
      </div>

      <FieldArray name="familyComposition">
        {({ push, remove, form }) => (
          <>
            {form.values.familyComposition.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-[35%_45%_19%] gap-1 gap-x-1 mb-2"
              >
                <div className="relative">
                  <Input
                    label="Ступінь родинного зв'язку (склад сім'ї):"
                    name={`familyComposition[${index}].degreeOfFamilyRelationship`}
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
                  label="П. І. Б."
                  name={`familyComposition[${index}].fullName`}
                  placeholder="..."
                />
                <MyAirDatepicker
                  label="Рік народження"
                  name={`familyComposition[${index}].yearOfBirth`}
                  placeholder="..."
                  format="yyyy"
                />
              </div>
            ))}
            <div className="relative group inline-block">
              <button
                type="button"
                onClick={() =>
                  push({
                    degreeOfFamilyRelationship: "",
                    fullName: "",
                    yearOfBirth: "",
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
    </>
  );
});
