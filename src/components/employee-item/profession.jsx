//--profession

import { useSelector } from "react-redux";

export const Profession = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного

  return (
    <>
      {/* шапка таблицы професия специальность */}
      <div>
        <div className="px-2 bg-gray-100 text-sm grid grid-cols-[55%_30%_15%] pt-2 mb-0.5">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Спеціальність (професія) за дипломом (свідоцтвом)
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Кваліфікація за дипломом (свідоцтвом)
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Форма навчання (денна, вечірня, заочна)
          </div>
        </div>
        {Array.isArray(employeeItem.profession) &&
          employeeItem.profession.map((prof, index) => (
            <div
              key={index}
              className="px-2 bg-gray-100 grid grid-cols-[55%_30%_15%] gap-y-0.5 mb-0.5"
            >
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {prof.profes}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {prof.qualification}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {prof.formOfStudy}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
