// -- title-company-form.jsx
import React from "react"; // <-- нужно обязательно
import { Input } from "./input";

export const TitleCompanyForm = React.memo(() => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
        <Input
          label="Найменування підприємства:"
          name="nameOfEnterprise"
          placeholder="..."
        />
        <Input label="Код ЄДРПОУ:" name="edrpoy" placeholder="..." />
      </div>
      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
});
