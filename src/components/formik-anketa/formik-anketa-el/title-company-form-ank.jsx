import React from "react"; // <-- нужно обязательно
import { Input } from "../../input";

export const TitleCompanyFormAnk = React.memo(() => {
  return (
    <>
      <div className="flex gap-4 justify-between items-center bg-[var(--main-bg-color)]  p-2">
        <div className="w-[50%] pb-1">
          <div>
            <div className="text-center">
              {" "}
              <Input name="nameOfEnterprise" placeholder="..." />
            </div>

            <p className="text-[10px] text-center">
              Найменування підприємства (установи, організації)
            </p>
          </div>

          <div className="flex items-end gap-2">
            <div>
              <p className="whitespace-nowrap text-sm">Код ЄДРПОУ</p>
            </div>
            <div className="text-center">
              <Input name="edrpoy" placeholder="..." />
            </div>
          </div>
        </div>
        <div className="w-[43%] ">
          <h2 className="text-xs font-bold text-center">Типова форма N П-2</h2>
          <div className="flex flex-col leading-none">
            <p>ЗАТВЕРДЖЕНО</p>
            <p>наказом Держкомстату та Міністерства оборони</p>
            <p>України</p>
            <p>від 25 грудня 2009 р. N 495/656</p>
          </div>
        </div>
      </div>
    </>
  );
});
