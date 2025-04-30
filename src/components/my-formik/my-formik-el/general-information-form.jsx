// -- I ЗАГАЛЬНІ ВІДОМОСТІ  general information
import React from "react"; // <-- нужно обязательно
import { InputFile } from "./input-file";
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { SelectField } from "../../customStylesSelect/selectField";
import {
  customStyles,
  options,
  optionsTypeWork,
  education,
} from "../../customStylesSelect/customStyles";

export const GeneralInformationForm = React.memo(() => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
        <MyAirDatepicker
          label="Дата заповнення"
          name="dateOfCompletion"
          placeholder="..."
          format="dd.MM.yyyy"
        />
        <Input
          label="Табельний номер"
          name="personnelNumber"
          placeholder="..."
        />
        <Input
          label="Індивідуальний ідентифікаційний номер"
          name="individualIdentificationNumber"
          placeholder="..."
        />
        <SelectField
          label="Стать"
          name="sex"
          options={options}
          styles={customStyles}
          placeholder="..."
        />
        <SelectField
          label="Вид роботи"
          name="typeOfWork"
          options={optionsTypeWork}
          styles={customStyles}
          placeholder="..."
        />
        <InputFile label="Фото співробітника" name="photoOfWorker" />
      </div>

      <h1 className="text-lg text-center">I ЗАГАЛЬНІ ВІДОМОСТІ</h1>

      <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
        <Input label="1. Прізвище:" name="name" placeholder="..." />
        <Input label="1.1 Ім'я:" name="firstName" placeholder="..." />
        <Input label="1.2 По батькові:" name="lastName" placeholder="..." />
        <MyAirDatepicker
          label="2. Дата народження"
          name="dateOfBirth"
          placeholder="..."
          format="dd.MM.yyyy"
        />
        <Input label="3. Громадянство:" name="citizenship" placeholder="..." />
        <SelectField
          label="4. Освіта"
          name="education"
          options={education}
          styles={customStyles}
          placeholder="..."
        />
      </div>
      <div className="w-full h-0.5 bg-[var(--main-color-line)] mt-[14px]"></div>
    </>
  );
});
