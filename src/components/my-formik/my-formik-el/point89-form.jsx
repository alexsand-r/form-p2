//-- Point67 (пункт 6-7)
//
import React from "react";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point89Form = React.memo(() => {
  return (
    <>
      <h2 className="text-lg text-center">Дата та причина звільнення</h2>
      <div className="grid grid-cols-[60%_1fr_1fr] gap-1 gap-x-4 mb-4">
        <h2 className="text-lg text-center">
          8. Дата та причина звільнення (скорочення штатів; за власним бажанням,
          за прогул та інші порушення, невідповідність займаній посаді тощо){" "}
        </h2>
        {/* тут календар */}

        <MyAirDatepicker
          label="Дата звільнення:"
          name="releaseDate"
          placeholder="..."
          format="dd.MM.yyyy"
        />

        <Input
          label="Причина звільнення :"
          name="reasonForDismissal"
          placeholder="..."
        />
      </div>

      <h3 className="text-base">
        9. Відомості про отримання пенсії (у разі наявності вказати вид
        пенсійних виплат згідно з чинним законодавством)
      </h3>

      <Input
        label="Відомості про отримання пенсії:"
        name="informationAboutReceivingPension"
        placeholder="..."
      />

      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
});
