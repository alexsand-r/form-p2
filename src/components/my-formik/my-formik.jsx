// формик
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const MuFormik = () => {
  const initialValues = itemToEdit || {
    name: "",
    amount: "",
    price: "",
    date: "",
  };
  return (
    <>
      <Formik
        onSubmit={addProduct}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true} // ⬅️ ЭТО ДОБАВЬ что заполнить поля формы редактированным объектом
        //onSubmit={(values) => console.log(values)}
      ></Formik>
    </>
  );
};
