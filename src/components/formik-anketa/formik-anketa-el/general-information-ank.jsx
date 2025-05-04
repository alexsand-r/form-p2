// -- I ЗАГАЛЬНІ ВІДОМОСТІ  general information
import React from "react"; // <-- нужно обязательно
import { InputFile } from "../../input-file";
import { Input } from "../../input";
import { MyAirDatepicker } from "../../my-air-datepicker";
import { SelectField } from "../../customStylesSelect/selectField";
import {
  customStyles,
  options,
  optionsTypeWork,
  education,
} from "../../customStylesSelect/customStyles";

export const GeneralInformationFormAnk = React.memo(() => {
  return (
    <>
      {/* ------ */}
      <div className="flex justify-between px-2 pt-4">
        <div className="w-[80%]">
          <div className="mb-0.5 mt-2 grid grid-cols-[1fr_1fr_1fr_1fr_1fr]  text-sm text-center border border-gray-700">
            <div className="flex items-center justify-center px-1 border-r border-gray-700">
              Дата заповнення
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700">
              Табельний номер
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700">
              Індивідуальний ідентифікаційний номер
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700">
              Стать (чоловіча, жіноча)
            </div>
            <div className="flex items-center justify-center px-1 border-gray-700">
              Вид роботи (основна, за сумісництвом)
            </div>
          </div>
          {/* ---------- форма грид --------------- */}
          <div className="mb-2 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] text-sm text-center gap-x-0.5">
            {/* Дата заповнення */}

            <MyAirDatepicker
              name="dateOfCompletion"
              placeholder="..."
              format="dd.MM.yyyy"
            />

            {/* Табельний номер */}

            <Input name="personnelNumber" placeholder="..." />

            {/* Індивідуальний ідентифікаційний номер */}

            <Input name="individualIdentificationNumber" placeholder="..." />

            {/* Стать (чоловіча, жіноча) */}

            <SelectField
              name="sex"
              options={options}
              styles={customStyles}
              placeholder="..."
            />

            {/* Вид роботи (основна, за сумісництвом) */}

            <SelectField
              name="typeOfWork"
              options={optionsTypeWork}
              styles={customStyles}
              placeholder="..."
            />
          </div>
          <div>
            <div className="flex justify-end">
              <p className="text-lg pr-10">ОСОБОВА КАРТКА ПРАЦІВНИКА</p>
            </div>

            <p className="text-sm font-bold">І. ЗАГАЛЬНІ ВІДОМОСТІ</p>
          </div>
        </div>
        {/* тут фото  */}
        <div className="relative w-[115px] h-[143px] mr-4">
          <InputFile name="photoOfWorker" />
        </div>
      </div>
      <div className="px-2 bg-[var(--main-bg-color)]  text-sm">
        <div className="flex items-end gap-x-2 mb-1">
          <p className="text-nowrap">1. Прізвище</p>
          <div className="w-[200px]">
            <Input name="name" placeholder="..." />
          </div>
          <p className="text-nowrap">Ім'я</p>
          <div className="w-[200px]">
            <Input name="firstName" placeholder="..." />
          </div>
          <p className="text-nowrap">По батькові</p>

          <div className="w-[200px]">
            <Input name="lastName" placeholder="..." />
          </div>
        </div>
        <div className="flex gap-x-2 items-end">
          <p className="text-nowrap">2. Дата народження</p>
          <div className="w-[170px]">
            <MyAirDatepicker
              name="dateOfBirth"
              placeholder="..."
              format="dd.MM.yyyy"
            />
          </div>
          <p className="text-nowrap">3. Громадянство</p>

          <div className="w-[250px]">
            <Input name="citizenship" placeholder="..." />
          </div>
        </div>
        <p className="flex items-end">
          4. Освіта (базова загальна середня, повна загальна середня,
          професійно-технічна, неповна вища, базова вища, повна вища){" "}
        </p>
        <div className="w-full text-center">
          <SelectField
            name="education"
            options={education}
            styles={customStyles}
            placeholder="..."
          />
        </div>
      </div>
    </>
  );
});
