//--EducationalInstitutions

import { useSelector } from "react-redux";

export const EducationalInstitutions = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного

  return (
    <>
      <div>
        {/* шапка таблицы Освита */}
        <div className="px-2 bg-[var(--main-bg-color)]  text-sm grid grid-cols-[55%_30%_15%] pt-2 mb-0.5">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Назва освітнього закладу
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Диплом (свідоцтво), серія, номер
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Рік закінчення
          </div>
        </div>
        {/* тут мапить наверное */}
        {Array.isArray(employeeItem.educationalInstitutions) &&
          employeeItem.educationalInstitutions.map((edu, index) => (
            <div
              key={index}
              className="px-2 bg-gray-100 grid grid-cols-[55%_30%_15%] gap-y-0.5 mb-0.5"
            >
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {edu.name}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {edu.documentNumber}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {edu.graduationYear}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
