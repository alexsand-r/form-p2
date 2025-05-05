// формик - тут чистый формик
import { useNavigate } from "react-router-dom"; // ⬅️ импорт
import { Link } from "react-router-dom";
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
  const navigate = useNavigate(); // ⬅️ хук навигации

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
    navigate("/"); // ⬅️ переход после сабмита и сброса формы
  };

  useEffect(() => {
    console.log("Обновился массив:", employeeArr);
  }, [employeeArr]);

  return (
    <>
      <div>
        <button
          type="button"
          className="bg-blue-400 py-0.5 px-1 rounded-md text-white fixed top-[3%] right-[10%] z-30 cursor-pointer hover:bg-blue-500 transition-bg duration-300"
        >
          <Link to="/" className="block w-full h-full">
            повернутися до списку
          </Link>
        </button>
      </div>
      <Formik
        onSubmit={addEmployeeInList}
        initialValues={itemToEdit || initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true} // ⬅️ ЭТО ДОБАВЬ что заполнить поля формы редактированным объектом
      >
        <Form className="my-10 mx-auto w-[1000px] px-2 text-sm py-2 shadow-md bg-[var(--main-bg-color)] ">
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
