//-- Point67 (пункт 6-7)
//
import React from "react";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point67Form = React.memo(() => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg text-center">
          {" "}
          Останнє місце роботи -- Стаж роботи
        </h2>
        <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
          <Input
            label="6. Останнє місце роботи :"
            name="lastPlaceOfWork"
            placeholder="..."
          />
          <Input
            label="посада (професія):"
            name="positionProfession"
            placeholder="..."
          />
          {/* тут календар */}
          <div className=" mb-3 w-1/2">
            <MyAirDatepicker
              label="7. Стаж роботи  станом на:"
              name="workExperience"
              placeholder="..."
              format="dd.MM.yyyy"
            />
          </div>
        </div>

        <h3 className="text-base">Загальний стаж: (днів місяців років)</h3>
        <div className="grid grid-cols-3 gap-x-3 mb-3">
          <Input label="днів:" name="genaralDay" placeholder="..." />
          <Input label="місяців:" name="genaralMounth" placeholder="..." />
          <Input label="років:" name="genaralYears" placeholder="..." />
        </div>
        <h3 className="text-base">
          Що дає право на надбавку за вислугу років: (днів місяців років){" "}
        </h3>
        <div className="grid grid-cols-3 gap-x-3">
          <Input label=" днів:" name="serviceDays" placeholder="..." />
          <Input label="місяців:" name="monthsOfService" placeholder="..." />
          <Input label="років:" name="yearsOfService" placeholder="..." />
        </div>
      </div>
      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
});
