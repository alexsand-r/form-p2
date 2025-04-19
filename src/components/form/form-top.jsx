//--form-top
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  setNameOfEnterprise,
  setEdrpoy,
  setDateOfCompletion,
  setPersonnelNumber,
  setIndividualIdentificationNumber,
  setSex,
  setTypeOfWork,
  setPhotoOfWorker,
} from "../../store/slices/formTopSlice";

const options = [
  { value: "ч", label: "чоловіча" },
  { value: "ж", label: "жіноча" },
];
const optionsTypeWork = [
  { value: "основна", label: "основна" },
  { value: "сумісництво", label: "сумісництво" },
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    margin: "0", //
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
    backgroundColor: "#f9fafb", // bg-gray-50
    borderWidth: "2px",
    borderColor: state.isFocused ? "#3b82f6" : "#d1d5db", // focus:border-blue-500 or border-gray-300
    borderRadius: "0.5rem", // rounded-lg
    //paddingLeft: "0.625rem", // px-2.5
    paddingTop: "3px", // py-2
    paddingBottom: "3px",
    fontSize: "1.125rem", // text-lg
    color: "#111827", // text-gray-900
    width: "100%",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e5e7eb" : "#fff", // hover:bg-gray-200
    color: "#111827",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#111827", // text-gray-900
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280", // text-gray-400
  }),
};

export const FormTop = () => {
  const dispatch = useDispatch();
  const {
    nameOfEnterprise,
    edrpoy,
    dateOfCompletion,
    personnelNumber,
    individualIdentificationNumber,
    sex,
    typeOfWork,
    photoOfWorker,
  } = useSelector((state) => state.formTopItem); // тут из сторе --  formTopItem: formTopSliceReducer,

  // получаю значение из инпута имя товара
  const handleNameOfEnterprise = (e) => {
    const textNameOfEnterprise = e.target.value.replace(/^\s+/, "");
    dispatch(setNameOfEnterprise(textNameOfEnterprise)); // Создаём экшен с payload
  };
  return (
    <>
      <form
        action="#"
        className="px-2 bg-gray-50 text-sm py-2 mb-4 shadow-md"
        //   onSubmit={}
      >
        <div className="grid grid-cols-2 gap-y-0.5 gap-x-4 mb-4">
          {/*  Найменування підприємства (установи, організації) */}
          <div>
            <label className="text-sm" htmlFor="name">
              Найменування підприємства (установи, організації)
            </label>
            <input
              onChange={handleNameOfEnterprise}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
              name="name"
              type="text"
              id="name"
              value={nameOfEnterprise} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Код ЄДРПОУ */}
          <div>
            <label className="text-sm" htmlFor="codEdrpoy">
              Код ЄДРПОУ
            </label>
            <input
              // onChange={}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500  w-full px-2.5 py-2"
              name="codEdrpoy"
              id="codEdrpoy"
              type="number"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/*  Дата заповнення */}
          <div>
            <label className="text-sm" htmlFor="dateOfCompletion">
              Дата заповнення
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="dateOfCompletion"
              id="dateOfCompletion"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Табельний номер */}
          <div>
            <label className="text-sm" htmlFor="personnelNumber">
              Табельний номер
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="personnelNumber"
              id="personnelNumber"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Індивідуальний ідентифікаційний номер */}
          <div>
            <label className="text-sm" htmlFor="individualIdentificationNumber">
              Індивідуальний ідентифікаційний номер
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="individualIdentificationNumber"
              id="individualIdentificationNumber"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Стать (чоловіча, жіноча) */}
          <div>
            <label className="text-sm" htmlFor="sec">
              Стать (чоловіча, жіноча)
            </label>
            <Select options={options} styles={customStyles} placeholder="" />
            {/* <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="sec"
              id="sec"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            /> */}
          </div>
          {/* Вид роботи (основна, за сумісництвом) */}
          <div>
            <label className="text-sm" htmlFor="typeOfwork">
              Вид роботи (основна, за сумісництвом)
            </label>
            <Select
              options={optionsTypeWork}
              styles={customStyles}
              placeholder=""
            />
            {/* <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="typeOfwork"
              id="typeOfwork"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            /> */}
          </div>
          {/* Фото робітника */}
          <div>
            <label className="text-sm" htmlFor="photo">
              Фото робітника
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="photo"
              id="photo"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
        </div>

        {/* кнопка */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-400 transition-bg duration-300 border-2 border-inherit hover:border-blue-700"
          >
            add item
          </button>
        </div>
      </form>
    </>
  );
};
