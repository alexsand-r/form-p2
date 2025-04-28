//--education

import { useSelector } from "react-redux";

export const Education = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в Education", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log("учебное заведение- ", lastEmployee.educationalInstitutions);
  // console.log("профессия-", lastEmployee.profession);

  return (
    <>
      <div>
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
        {Array.isArray(lastEmployee.educationalInstitutions) &&
          lastEmployee.educationalInstitutions.map((edu, index) => (
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
        {Array.isArray(lastEmployee.profession) &&
          lastEmployee.profession.map((prof, index) => (
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
