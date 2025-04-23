// -- I ЗАГАЛЬНІ ВІДОМОСТІ  general information

import { InputFile } from "../my-formik-el/input-file";
import { Input } from "../my-formik-el/input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { SelectField } from "../../customStylesSelect/selectField";
import {
  customStyles,
  options,
  optionsTypeWork,
  education,
} from "../../customStylesSelect/customStyles";

export const GeneralInformation = () => {
  return (
    <>
      <h1 className="text-lg text-center">I ЗАГАЛЬНІ ВІДОМОСТІ</h1>
      <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
        <Input
          label="Найменування підприємства:"
          name="nameOfEnterprise"
          placeholder="..."
        />
        <Input label="Код ЄДРПОУ:" name="edrpoy" placeholder="..." />
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
        <Input label="Прізвище:" name="name" placeholder="..." />
        <Input label="Ім'я:" name="firstName" placeholder="..." />
        <Input label="По батькові:" name="lastName" placeholder="..." />
        <MyAirDatepicker
          label="Дата народження"
          name="dateOfBirth"
          placeholder="..."
          format="dd.MM.yyyy"
        />
        <SelectField
          label="Освіта"
          name="education"
          options={education}
          styles={customStyles}
          placeholder="..."
        />
        <Input label="Громадянство:" name="citizenship" placeholder="..." />
      </div>
    </>
  );
};
