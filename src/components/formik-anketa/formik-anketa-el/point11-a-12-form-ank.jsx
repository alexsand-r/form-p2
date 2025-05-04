//-- point11a12Form.jsx
import React from "react";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point11a12FormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 text-sm pt-2">
        <p className=" flex gap-2 items-end mb-2">
          11. Місце фактичного проживання (область, місто, район, вулиця, N
          будинку, квартири, номер контактного телефону, поштовий індекс)
        </p>
        <div className="w-full mb-2">
          <Input name="actualPlaceOfResidence" placeholder="..." />
        </div>
        <p className=" flex gap-2 items-end mb-2">
          12. Місце проживання за державною реєстрацією
        </p>
        <div className="w-full mb-2">
          <Input name="placeOfResidenceRegistration" placeholder="..." />
        </div>
        <div className=" flex gap-2 items-end mb-2">
          <p> Паспорт: серія</p>
          <div className="uppercase w-[70px]">
            <Input name="passportSeries" placeholder="..." />
          </div>
          <p> N</p>
          <div className="w-[70px] ">
            <Input name="passportNumber" placeholder="..." />
          </div>
        </div>
        <p className="mb-2">ким виданий:</p>
        <div className="w-full mb-2">
          <Input name="byWhomIssued" placeholder="..." />
        </div>
        <div className="flex items-end gap-x-3">
          <p className="text-nowrap">дата видачі</p>
          <div className="w-[120px]">
            <MyAirDatepicker
              name="dateOfIssue"
              placeholder="..."
              format="dd.MM.yyyy"
            />
          </div>
        </div>
      </div>
    </>
  );
});
