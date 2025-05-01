//-- header
import { useSelector } from "react-redux";

export const TitleCompany = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного

  return (
    <>
      <div className="flex gap-4 justify-between items-end bg-[var(--main-bg-color)]  p-2">
        <div className="w-[50%] pb-1">
          <div>
            <p className="text-center w-full bg-white">
              {employeeItem.nameOfEnterprise}
            </p>
            <p className="block w-full h-[1px] bg-gray-900"></p>
            <p className="text-[10px] text-center">
              Найменування підприємства (установи, організації)
            </p>
          </div>

          <div className="flex items-end gap-2">
            <div>
              <p className="whitespace-nowrap text-sm">Код ЄДРПОУ</p>
            </div>
            <p className="text-center border-b border-gray-900 w-full bg-white">
              {employeeItem.edrpoy}
            </p>
          </div>
        </div>
        <div className="w-[43%] ">
          <h2 className="text-xs font-bold text-center">Типова форма N П-2</h2>
          <div className="flex flex-col leading-none">
            <p>ЗАТВЕРДЖЕНО</p>
            <p>наказом Держкомстату та Міністерства оборони</p>
            <p>України</p>
            <p>від 25 грудня 2009 р. N 495/656</p>
          </div>
        </div>
      </div>
    </>
  );
};
