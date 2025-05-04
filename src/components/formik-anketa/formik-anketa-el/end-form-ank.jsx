// -- end-form
import React from "react";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const EndFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 text-sm pt-2 pb-5">
        {/* Додаткові відомості */}
        <div className="mb-1">
          <p className=" flex gap-2 items-end">Додаткові відомості</p>
          <div className="w-full">
            <Input name="additionalInformation" placeholder="..." />
          </div>
        </div>
        <div className="flex gap-3 mb-1">
          <p className=" flex gap-2 items-end text-nowrap">
            Дата і причина звільнення (підстава)
          </p>
          <div className="w-full">
            <MyAirDatepicker
              name="releaseDateDay"
              placeholder="..."
              format="dd.MM.yyyy"
            />
          </div>
          <div className="w-full">
            <Input name="reasonForDismissalDay" placeholder="..." />
          </div>
        </div>
        <div className="flex gap-3 mb-2">
          <p className=" flex gap-2 items-end text-nowrap">
            Працівник кадрової служби
          </p>
          <div className="flex items-center gap-x-3">
            <div className="w-full flex items-end gap-x-1">
              <p>посада</p>
              <Input name="position" placeholder="..." />
            </div>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <div className="w-full flex items-end gap-x-1">
              <p>П.І.Б.</p>
              <Input name="lastNameMiddleName" placeholder="..." />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">Підпис працівника</p>
          <div className="flex items-center  gap-x-3">
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <div className="relative top-5 right-0">
              <MyAirDatepicker
                name="dataDocument"
                placeholder="..."
                format="dd.MM.yyyy"
              />
              <p className="text-center">Дата документу</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
