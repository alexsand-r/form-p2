// формик

import { Formik, Form } from "formik";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, editEmployee } from "../../store/slices/employeeSlice";
import { useEffect } from "react";
import { initialValues } from "../initialValues";
import { validationSchema } from "../validationSchema";
import { EducationalInstitutions } from "./my-formik-el/educationalInstitutions";
import { Profession } from "./my-formik-el/profession";
import { GeneralInformation } from "./my-formik-el/general-information";
import { PostGraduate } from "./my-formik-el/post-graduate-training";

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
      console.log("Добавлен новый элемент:", formattedValues);
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
      >
        <Form className="px-2 bg-gray-100 text-sm py-2 mb-4 shadow-md">
          {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
          <GeneralInformation />

          {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
          <EducationalInstitutions />

          {/* Спеціальність / професія -- profession */}
          <Profession />
          {/* post-graduate training (після дипломна підготовка) */}
          <PostGraduate />

          <Button />
        </Form>
      </Formik>
    </>
  );
};
