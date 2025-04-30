//-- title.jsx

import { useSelector } from "react-redux";
//import { useEffect } from "react";

import userPhoto from "../../../public/photo.svg";
export const Title = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного

  return (
    <>
      <div className="flex justify-between px-2 pt-4 bg-[var(--main-bg-color)]  ">
        <div>
          <div className="mb-2 mt-2 grid grid-cols-[100px_130px_130px_100px_130px] grid-rows-[auto_30px] text-sm text-center border border-gray-700">
            <div className="flex items-center justify-center px-1 border-b border-r border-gray-700">
              Дата заповнення
            </div>
            <div className="flex items-center justify-center px-1 border-b border-r border-gray-700">
              Табельний номер
            </div>
            <div className="flex items-center justify-center px-1 border-b border-r border-gray-700">
              Індивідуальний ідентифікаційний номер
            </div>
            <div className="flex items-center justify-center px-1 border-b border-r border-gray-700">
              Стать (чоловіча, жіноча)
            </div>
            <div className="flex items-center justify-center px-1 border-b border-gray-700">
              Вид роботи (основна, за сумісництвом)
            </div>
            {/* Дата заповнення */}
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              {employeeItem.dateOfCompletion}
            </div>
            {/* Табельний номер */}
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              {employeeItem.personnelNumber}
            </div>
            {/* Індивідуальний ідентифікаційний номер */}
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              {employeeItem.individualIdentificationNumber}
            </div>
            {/* Стать (чоловіча, жіноча) */}
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              {employeeItem.sex}
            </div>
            {/* Вид роботи (основна, за сумісництвом) */}
            <div className="flex items-center justify-center px-1 bg-white">
              {employeeItem.typeOfWork}
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <p className="text-lg pr-10">ОСОБОВА КАРТКА ПРАЦІВНИКА</p>
            </div>

            <p className="text-sm font-bold">І. ЗАГАЛЬНІ ВІДОМОСТІ</p>
          </div>
        </div>
        {/* <div className=" w-[115px] h-[143px] border border-gray-700 relative mr-4">
          <p className="text-[10px] absolute top-1/2 left-1/2 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2">
            місце для фотокартки
          </p>
        </div> */}
        <div className=" w-[115px] h-[143px] border border-gray-700 mr-4">
          <div className="relative pb-[124%]">
            <img
              src={
                employeeItem.photoOfWorker
                  ? employeeItem.photoOfWorker
                  : userPhoto
              }
              alt="Фото"
              className={`absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 ${
                employeeItem.photoOfWorker ? "w-full h-full" : "w-1/2 h-1/2"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
