// -- blockIIForm.jsx (ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК)
import React from "react";
import { Input } from "./input";

export const ChapterIIForm = React.memo(() => {
  return (
    <>
      <h2 className="text-lg text-center mt-4">
        ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
      </h2>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        <Input
          label="Група обліку :"
          name="accountingGroup"
          placeholder="..."
        />
        <Input
          label="Придатність до військової служби:"
          name="eligibilityMilitary"
          placeholder="..."
        />
        <Input
          label="Категорія обліку:"
          name="categoriaGroup"
          placeholder="..."
        />
        <Input
          label="Назва райвійськкомату за місцем реєстрації:"
          name="nameOfDistrictMilitary"
          placeholder="..."
        />
        <Input label="Склад:" name="composition" placeholder="..." />
        <Input
          label="Назва райвійськкомату за місцем фактичного проживання:"
          name="nameDistrictActual"
          placeholder="..."
        />

        <Input
          label="Військове звання:"
          name="militaryRank"
          placeholder="..."
        />
        <Input
          label="Перебування на спеціальному обліку:"
          name="stayingSpecialRegistration"
          placeholder="..."
        />
        <Input
          label="Військово-облікова спеціальність N:"
          name="militaryAccountingSpecialty"
          placeholder="..."
        />
      </div>
    </>
  );
});
