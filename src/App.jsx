import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadEmployeesFromJSON } from "./store/slices/employeeSlice";

import { ListBody } from "./components/list/list-body"; // список сотрудников
import { ItemCard } from "./components/employee-item/item-card";
import { MyFormik } from "./components/my-formik/my-formik";

function App() {
  const [itemToEdit, setItemToEdit] = useState(null);
  const dispatch = useDispatch();

  // 🔻 Загружаем JSON один раз при старте
  useEffect(() => {
    dispatch(loadEmployeesFromJSON());
    console.log("рендер данних на странице из джесона");
  }, [dispatch]);

  return (
    <>
      <ListBody setItemToEdit={setItemToEdit} />
      <MyFormik itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} />
      <ItemCard />
    </>
  );
}

export default App;
