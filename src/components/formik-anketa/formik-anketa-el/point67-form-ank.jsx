//-- Point67 (пункт 6-7)
//
import React from "react";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point67FormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 text-sm pt-2">
        <div className="flex items-end mb-2 gap-x-3">
          <p> 6. Останнє місце роботи</p>

          <div className="w-[200px]">
            <Input name="lastPlaceOfWork" placeholder="..." />
          </div>
          <p> посада (професія)</p>
          <div className="w-[200px]">
            <Input name="positionProfession" placeholder="..." />
          </div>
        </div>
        <div className="flex items-end mb-2 gap-x-2">
          <p>7. Стаж роботи станом на</p>

          <div className="w-[200px]">
            <MyAirDatepicker
              name="workExperience"
              placeholder="..."
              format="dd.MM.yyyy"
            />
          </div>
          <p>Загальний</p>
          <div className="w-[50px] px-2">
            <Input name="genaralDay" placeholder="..." />
          </div>
          <p>днів</p>
          <div className="w-[50px] px-2">
            <Input name="genaralMounth" placeholder="..." />
          </div>
          <p>місяців</p>
          <div className="w-[50px] px-2">
            <Input name="genaralYears" placeholder="..." />
          </div>
          <p>років,</p>
        </div>
        <div className="flex justify-end pr-15">
          <div className="flex items-end">
            <p>що дає право на надбавку за вислугу років</p>

            <div className="w-[50px] px-2">
              <Input name="serviceDays" placeholder="..." />
            </div>
            <p>днів</p>
            <div className="w-[50px] px-2">
              <Input name="monthsOfService" placeholder="..." />
            </div>
            <p>місяців</p>
            <div className="w-[50px] px-2">
              <Input name="yearsOfService" placeholder="..." />
            </div>
            <p>років.</p>
          </div>
        </div>
      </div>
    </>
  );
});
