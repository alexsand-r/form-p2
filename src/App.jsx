import { ListBody } from "./components/list/list-body"; //список сотруюников

import { ItemCard } from "./components/employee-item/item-card";
import { MyFormik } from "./components/my-formik/my-formik";
import { useState } from "react";

function App() {
  const [itemToEdit, setItemToEdit] = useState(null); // состояние для редактируемого объекта
  return (
    <>
      <ListBody />
      <MyFormik itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} />
      <ItemCard setItemToEdit={setItemToEdit} />
    </>
  );
}

export default App;
