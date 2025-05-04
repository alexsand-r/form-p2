// формик - тут чистый формик

import { Formik, Form } from "formik";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, editEmployee } from "../../store/slices/employeeSlice";
import { useEffect } from "react";
import { initialValues } from "../initialValues";
import { validationSchema } from "../validationSchema";
import { TitleCompanyFormAnk } from "./formik-anketa-el/title-company-form-ank";
import { GeneralInformationFormAnk } from "./formik-anketa-el/general-information-ank";
import { EducationalInstitutionsFormAnk } from "./formik-anketa-el/educational-institutions-form-ank";
import { ProfessionFormAnk } from "./formik-anketa-el/profession-form-ank";
import { PostGraduateFormAnk } from "./formik-anketa-el/post-graduate-form-ank";
import { Point67FormAnk } from "./formik-anketa-el/point67-form-ank";
import { Point89FormAnk } from "./formik-anketa-el/point89-form-ank";
import { Point10FormAnk } from "./formik-anketa-el/point10-form-ank";
import { Point11a12FormAnk } from "./formik-anketa-el/point11-a-12-form-ank";
import { ChapterIIFormAnk } from "./formik-anketa-el/chapterII-form-ank";
import { ChapterIIIFormAnk } from "./formik-anketa-el/chapterIII-form-ank";
import { ChapterIVFormAnk } from "./formik-anketa-el/chapterIV-form-ank";
import { ChapterVFormAnk } from "./formik-anketa-el/chapterV-form-ank";
import { EndFormAnk } from "./formik-anketa-el/end-form-ank";

export const FormikAnketa = ({ itemToEdit, setItemToEdit }) => {
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
          <TitleCompanyFormAnk />

          {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
          <GeneralInformationFormAnk />

          {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
          <EducationalInstitutionsFormAnk />

          {/* Спеціальність / професія -- profession */}
          <ProfessionFormAnk />

          {/* post-graduate training (після дипломна підготовка) */}
          <PostGraduateFormAnk />

          {/* 6. Останнє місце роботи 7. Стаж роботи */}
          <Point67FormAnk />

          {/* 8. Дата звільнення  9. Причини звільнення  */}
          <Point89FormAnk />

          {/* 10. Родинний стан */}
          <Point10FormAnk />

          {/* 11 - 12. паспортни данни */}
          <Point11a12FormAnk />

          {/* ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК */}
          <ChapterIIFormAnk />

          {/* ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
          <ChapterIIIFormAnk />

          {/* ІV. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
          <ChapterIVFormAnk />

          {/* V. ВІДПУСТКИ */}
          <ChapterVFormAnk />

          {/* Додаткові відомості */}
          <EndFormAnk />

          <Button itemToEdit={itemToEdit} />
        </Form>
      </Formik>
    </>
  );
};
