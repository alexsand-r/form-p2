// формик

import { Formik, Form } from "formik";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, editEmployee } from "../../store/slices/employeeSlice";
import { useEffect } from "react";
import { initialValues } from "../initialValues";
import { validationSchema } from "../validationSchema";
import { GeneralInformationForm } from "./my-formik-el/general-information-form";
import { TitleCompanyForm } from "./my-formik-el/title-company-form";
import { Point67Form } from "./my-formik-el/point67-form";
import { Point89Form } from "./my-formik-el/point89-form";
import { Point10Form } from "./my-formik-el/point10-form";
import { Point11a12Form } from "./my-formik-el/point11-a-12-form";
import { ChapterIIForm } from "./my-formik-el/chapterII-form";
import { ChapterIIIForm } from "./my-formik-el/chapterIII-form";
import { ChapterIVForm } from "./my-formik-el/chapterIV-form";
import { EducationalInstitutionsForm } from "./my-formik-el/educational-institutions-form";
import { ProfessionForm } from "./my-formik-el/profession-form";
import { PostGraduateForm } from "./my-formik-el/post-graduate-training-form";
import { ChapterVForm } from "./my-formik-el/chapterV-form";
import { EndForm } from "./my-formik-el/end-form";

export const MyFormik = ({ itemToEdit, setItemToEdit }) => {
  const dispatch = useDispatch();
  const employeeArr = useSelector((state) => state.employee.employeeArr);

  const addEmployeeInList = (values, { resetForm }) => {
    const formattedValues = { ...values };

    if (itemToEdit) {
      dispatch(editEmployee({ ...formattedValues, id: itemToEdit.id }));
      console.log("Редактируем элемент:", formattedValues);
    } else {
      dispatch(addEmployee(formattedValues));
      console.log("Добавлен новый элемент- formattedValues-:", formattedValues);
    }

    resetForm();
    setItemToEdit(null);
  };

  useEffect(() => {
    console.log("Обновился массив:", employeeArr);
  }, [employeeArr]);

  return (
    <>
      <h1 className="text-sm font-bold mb-3">Форма Т-2 (формик)</h1>
      <Formik
        onSubmit={addEmployeeInList}
        initialValues={itemToEdit || initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true} // ⬅️ ЭТО ДОБАВЬ что заполнить поля формы редактированным объектом
      >
        <Form className="px-2 bg-[var(--main-bg-color)] text-sm py-2 mb-4 shadow-md">
          {/* шапка формы: название предприятия и код едрпоу */}
          <TitleCompanyForm />

          {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
          <GeneralInformationForm />

          {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
          <EducationalInstitutionsForm />

          {/* Спеціальність / професія -- profession */}
          <ProfessionForm />

          {/* post-graduate training (після дипломна підготовка) */}
          <PostGraduateForm />

          {/* 6. Останнє місце роботи 7. Стаж роботи */}
          <Point67Form />

          {/* 8. Дата звільнення  9. Причини звільнення  */}
          <Point89Form />

          {/* 10. Родинний стан */}
          <Point10Form />

          {/* 11 - 12. паспортни данни */}
          <Point11a12Form />

          {/* ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК */}
          <ChapterIIForm />

          {/* ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
          <ChapterIIIForm />

          {/* ІV. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
          <ChapterIVForm />

          {/* V. ВІДПУСТКИ */}
          <ChapterVForm />

          {/* Додаткові відомості */}
          <EndForm />

          <Button itemToEdit={itemToEdit} />
        </Form>
      </Formik>
    </>
  );
};
