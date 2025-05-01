## ❗️❗️ перегляд данних в анкете.

# для перегляду отредактировал слайс

<!-- const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeArr: [],
    selectedEmployee: null, // <--- 👉 добавлено ❗️
  },
    selectEmployeeForView: (state, action) => {  // <--- 👉 добавлено ❗️
    state.selectedEmployee = action.payload;
    console.log("рендер для предпросмотра", action.payload);
}, -->

# в /-- list-body в кнопку диспатчу selectEmployeeForView

<!-- <button
    onClick={() => dispatch(selectEmployeeForView(el))}
    type="button"
    className="cursor-pointer bg-green-500 px-1 text-white hover:bg-green-600 transition-bg duration-300" >
    переглянути
</button> -->

# переделываю компонент для рендера напримере хедер

export const Header = () => {
//const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
👉 const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

//console.log("вывожу в хедере", employeeArr);
//const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
👉 const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
