// -- blockIIForm.jsx (ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК)
import React from "react";
import { Input } from "../../input";

export const ChapterIIFormAnk = React.memo(() => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)]  text-sm pt-2 mb-4">
        <h2 className="text-sm font-bold mt-4 mb-2">
          ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        </h2>
        <div className="flex gap-3 justify-between">
          <div className="flex-1/2">
            <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
              <p>Група обліку</p>

              <div className="w-full">
                <Input name="accountingGroup" placeholder="..." />
              </div>
            </div>
            <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
              <p>Категорія обліку</p>

              <div className="w-full">
                <Input name="categoriaGroup" placeholder="..." />
              </div>
            </div>
            <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
              <p>Склад</p>

              <div className="w-full">
                <Input name="composition" placeholder="..." />
              </div>
            </div>
            <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
              <p>Військове звання</p>

              <div className="w-full">
                <Input name="militaryRank" placeholder="..." />
              </div>
            </div>
            <div className="flex gap-x-1.5 text-nowrap items-end">
              <p> Військово-облікова спеціальність N</p>

              <div className="w-full">
                <Input name="militaryAccountingSpecialty" placeholder="..." />
              </div>
            </div>
          </div>
          <div className="flex-1/2">
            <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
              <p>Придатність до військової служби</p>

              <div className="w-full">
                <Input name="eligibilityMilitary" placeholder="..." />
              </div>
            </div>
            <div>
              <div className="flex gap-x-1.5 text-nowrap items-end mb-0.5">
                <p>Назва райвійськкомату за місцем реєстрації</p>
              </div>
              <div className="w-full">
                <Input name="nameOfDistrictMilitary" placeholder="..." />
              </div>
            </div>
            <div>
              <p className="flex text-nowrap items-end">
                Назва райвійськкомату за місцем фактичного проживання
              </p>
              <div className="w-full">
                <Input name="nameDistrictActual" placeholder="..." />
              </div>
            </div>
            <div className="flex text-nowrap items-end">
              <p>Перебування на спеціальному обліку</p>

              <div className="w-full">
                <Input name="stayingSpecialRegistration" placeholder="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
