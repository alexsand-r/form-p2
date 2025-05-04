import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadEmployeesFromJSON } from "./store/slices/employeeSlice";
import { ListBody } from "./components/list/list-body"; // список сотрудников
import { ItemCard } from "./components/employee-item/item-card";

import { FormikAnketa } from "./components/formik-anketa/formik-anketa";

function App() {
  const [itemToEdit, setItemToEdit] = useState(null); //состояние для редактируемого объекта

  const dispatch = useDispatch();

  // 🔻 Загружаем JSON один раз при старте
  useEffect(() => {
    dispatch(loadEmployeesFromJSON());
    console.log("рендер данних на странице из джесона");
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ListBody setItemToEdit={setItemToEdit} />}
          />
          <Route
            path="/form"
            element={
              <FormikAnketa
                itemToEdit={itemToEdit}
                setItemToEdit={setItemToEdit}
              />
            }
          />
          <Route path="/itemCard" element={<ItemCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
