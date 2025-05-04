//-- point10
import React from "react";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { FieldArray } from "formik";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export const Point10FormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <div className=" flex gap-2 items-end">
          <p> 10. Родинний стан</p>

          <div className="w-[600px]">
            <Input name="maritalStatus" placeholder="..." />
          </div>
        </div>
        <div className="text-sm grid grid-cols-[30%_1fr_20%] pt-2 mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Ступінь родинного зв'язку <br /> (склад сім'ї)
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            П. І. Б.
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Рік народження
          </div>
        </div>
      </div>

      <FieldArray name="familyComposition">
        {({ push, remove, form }) => (
          <>
            {form.values.familyComposition.map((_, index) => (
              <div
                key={index}
                className="px-2 grid grid-cols-[30%_1fr_20%] gap-x-1 mb-7"
              >
                <div className="relative">
                  <Input
                    name={`familyComposition[${index}].degreeOfFamilyRelationship`}
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
                  name={`familyComposition[${index}].fullName`}
                  placeholder="..."
                />
                <MyAirDatepicker
                  name={`familyComposition[${index}].yearOfBirth`}
                  placeholder="..."
                  format="yyyy"
                />
              </div>
            ))}
            <div className="pl-2 relative group inline-block">
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

      {/* ------ */}
    </>
  );
});
