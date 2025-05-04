//-- Point67 (пункт 6-7)
//
import React from "react";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point89FormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <div className="mb-2">
          <p>
            8. Дата та причина звільнення (скорочення штатів; за власним
            бажанням, за прогул та інші порушення, невідповідність
          </p>
          <p>займаній посаді тощо)</p>
          <div className="flex gap-x-2 items-end">
            <p>Дата звільнення</p>
            <div className="w-[200px]">
              <MyAirDatepicker
                name="releaseDate"
                placeholder="..."
                format="dd.MM.yyyy"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 items-end">
          <p className="text-nowrap">Причина звільнення</p>
          <div className="w-[780px]">
            <Input name="reasonForDismissal" placeholder="..." />
          </div>
        </div>
        <p className=" flex gap-2">
          9. Відомості про отримання пенсії (у разі наявності вказати вид
          пенсійних виплат згідно з чинним законодавством)
        </p>

        <div className="w-[780px]">
          <Input name="informationAboutReceivingPension" placeholder="..." />
        </div>
      </div>
    </>
  );
});
