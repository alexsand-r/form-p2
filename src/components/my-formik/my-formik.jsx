// формик

import { Formik, Form, FieldArray, Field } from "formik";
//import Select from "react-select";
import { Input } from "./input";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, editEmployee } from "../../store/slices/employeeSlice";
import { useEffect } from "react";
import { initialValues } from "../initialValues"; // импортирую значения полей для формы
import { validationSchema } from "../validationSchema"; // импортирую валидацию
import { MyAirDatepicker } from "../my-air-datepicker";
import {
  customStyles,
  options,
  optionsTypeWork,
  education,
  formOfStudy,
} from "../customStylesSelect/customStyles"; // импортирую стили для селекта
import { SelectField } from "../customStylesSelect/selectField";
import { InputFile } from "./input-file";
import plus from "../../../public/plus.svg";
import minus from "../../../public/minus.svg";

export const MyFormik = ({ itemToEdit, setItemToEdit }) => {
  const dispatch = useDispatch();
  const employeeArr = useSelector((state) => state.employee.employeeArr);

  const addEmployeeInList = (values, { resetForm }) => {
    const formattedValues = {
      ...values,
    };

    if (itemToEdit) {
      // 🔧 редактирование
      const editedItem = {
        ...formattedValues,
        id: itemToEdit.id, // обязательно передай id
      };
      dispatch(editEmployee(editedItem));
      console.log("Редактируем элемент:", editedItem);
    } else {
      // ➕ добавление
      dispatch(addEmployee(formattedValues));
      console.log("Сделал сабмит и добавил  новый элемент:", formattedValues);
    }

    resetForm();
    setItemToEdit(null);
  };

  const regx = {
    name: /^[A-Za-zА-Яа-яЁё]{5,30}$/,
  };

  useEffect(() => {
    console.log("Обновился массив:", employeeArr);
  }, [employeeArr]);

  return (
    <>
      <h1 className="text-sm font-bold mb-3">Форма Т-2 (формик)</h1>
      <Formik
        onSubmit={addEmployeeInList}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        <Form
          action="#"
          className="px-2 bg-gray-100 text-sm py-2 mb-4 shadow-md "
        >
          <h1 className="text-lg text-center">I ЗАГАЛЬНІ ВІДОМОСТІ</h1>
          <div className="grid grid-cols-2 gap-1 gap-x-4 mb-4">
            {/* header */}
            <Input
              label="Найменування підприємства (установи, організації):"
              name="nameOfEnterprise"
              placeholder="Введіть назву підприємства ..."
            />
            <Input
              label="Код ЄДРПОУ:"
              name="edrpoy"
              placeholder="Введіть ЄДРПОУ ..."
            />
            {/* title */}
            <MyAirDatepicker
              label="Дата заповнення"
              name="dateOfCompletion"
              placeholder="Введіть дату ..."
            />
            <Input
              label="Табельний номер"
              name="personnelNumber"
              placeholder="Введіть табельний номер ..."
            />
            <Input
              label="Індивідуальний ідентифікаційний номер"
              name="individualIdentificationNumber"
              placeholder="Введіть ідентифікаційний номер ..."
            />
            <SelectField
              label="Стать (чоловіча, жіноча)"
              name="sex"
              options={options}
              styles={customStyles}
              placeholder="Визначте стать ..."
            />
            <SelectField
              label="Вид роботи (основна, за сумісництвом)"
              name="typeOfWork"
              options={optionsTypeWork}
              styles={customStyles}
              placeholder="Вибрати необхідне ..."
            />
            <InputFile label="Фото співробітника" name="photoOfWorker" />
            {/* І. ЗАГАЛЬНІ ВІДОМОСТІ*/}
            <Input
              label="Прізвище:"
              name="name"
              placeholder="Введіть прізвище ..."
            />
            <Input
              label="Ім'я:"
              name="firstName"
              placeholder="Введіть ім'я ..."
            />
            <Input
              label="По батькові:"
              name="lastName"
              placeholder="Введіть по батькові ..."
            />
            <MyAirDatepicker
              label="Дата народження"
              name="dateOfBirth"
              placeholder="Введіть дату ..."
            />
            <SelectField
              label="Освіта"
              name="education"
              options={education}
              styles={customStyles}
              placeholder="Вибрати необхідне ..."
            />
            <Input
              label="Громадянство:"
              name="citizenship"
              placeholder="Введіть громадянство ..."
            />
          </div>
          {/* new block */}
          <h2 className="text-lg text-center mt-4">Навчальні заклади</h2>
          {/* учбові заклади */}
          <FieldArray name="educationalInstitutions">
            {({ push, remove, form }) => (
              <>
                {form.values.educationalInstitutions.map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[50%_30%_19%] gap-1 gap-x-1 mb-2"
                  >
                    <Input
                      label="Назва освітнього закладу:"
                      name={`educationalInstitutions[${index}].name`}
                      placeholder="Введіть назву ..."
                    />
                    <Input
                      label="Диплом серія, номер"
                      name={`educationalInstitutions[${index}].documentNumber`}
                      placeholder="Введіть номер док ..."
                    />
                    <MyAirDatepicker
                      label="Рік закінчення"
                      name={`educationalInstitutions[${index}].graduationYear`}
                      placeholder="Введіть дату ..."
                    />
                    {/* Кнопка удаления строки (если больше 1) */}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 text-xs underline mt-1"
                      >
                        <img
                          src={minus}
                          alt="minus-icon"
                          className="cursor-pointer"
                        />
                      </button>
                    )}
                  </div>
                ))}

                {/* Кнопка добавления новой строки */}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      name: "",
                      documentNumber: "",
                      graduationYear: "",
                    })
                  }
                  className="text-blue-500 text-sm underline"
                >
                  <img src={plus} alt="plus-icon" className="cursor-pointer" />
                </button>
              </>
            )}
          </FieldArray>
          {/* спеціальність профессія */}
          <h2 className="text-lg text-center mt-4">
            Спеціальність (професія) за дипломом (свідоцтвом){" "}
          </h2>
          <FieldArray name="profession">
            {({ push, remove, form }) => (
              <>
                {form.values.profession.map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[50%_30%_19%] gap-1 gap-x-1 mb-2"
                  >
                    <Input
                      label="Спеціальність (професія) за дипломом (свідоцтвом):"
                      name={`profession[${index}].profes`}
                      placeholder="Введіть назву ..."
                    />
                    <Input
                      label="Кваліфікація за дипломом (свідоц)"
                      name={`profession[${index}].qualification`}
                      placeholder="Вказати кваліф ..."
                    />
                    <SelectField
                      label="Форма навчання"
                      //name={`profession[${index}].formOfStudy`}
                      name="formOfStudy"
                      options={formOfStudy}
                      styles={customStyles}
                      placeholder="Виберіть  ..."
                    />
                    {/* <MyAirDatepicker
                      label="Форма навчання"
                      name={`profession[${index}].formOfStudy`}
                      placeholder="Виберіть необхідне ..."
                    /> */}
                    {/* Кнопка удаления строки (если больше 1) */}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 text-xs underline mt-1"
                      >
                        <img
                          src={minus}
                          alt="minus-icon"
                          className="cursor-pointer"
                        />
                      </button>
                    )}
                  </div>
                ))}

                {/* Кнопка добавления новой строки */}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      profes: "",
                      qualification: "",
                      formOfStudy: "",
                    })
                  }
                  className="text-blue-500 text-sm underline"
                >
                  <img src={plus} alt="plus-icon" className="cursor-pointer" />
                </button>
              </>
            )}
          </FieldArray>
          <div></div>
          <Button />
        </Form>
      </Formik>
    </>
  );
};
