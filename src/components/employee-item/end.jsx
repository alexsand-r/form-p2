//--chapter-end
import { useSelector } from "react-redux";

export const End = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2 pb-10">
        {/* Додаткові відомості */}
        <div>
          <p className=" flex gap-2 items-end">Додаткові відомості</p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {employeeItem.additionalInformation}
          </span>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">
            Дата і причина звільнення (підстава)
          </p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {employeeItem.releaseDateDay}
          </span>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {employeeItem.reasonForDismissalDay}
          </span>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">
            Працівник кадрової служби
          </p>
          <div className="flex items-center gap-x-3">
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-full">
              {employeeItem.position}
            </span>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-full">
              {employeeItem.lastNameMiddleName}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">Підпис працівника</p>
          <div className="flex items-center gap-x-3">
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <div className="relative top-5 right-0">
              <span className="bg-white block border-b border-b-gray-700 px-4 text-base text-center font-semibold self-end w-full">
                {employeeItem.dataDocument}
              </span>
              <p className="text-center">Дата документу</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
