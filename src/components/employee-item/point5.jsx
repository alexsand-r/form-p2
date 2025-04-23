//--five

// -- іслядипломна професійна підготовка: навчання postgraduateProfessional
import { useSelector } from "react-redux";

export const Point5 = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  // console.log("Післядипломна професійна підготовка", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log(
  //   "Післядипломна професійна підготовка- ",
  //   lastEmployee.educationalInstitutions
  // );
  // console.log("Післядипломна професійна підготовка-", lastEmployee.profession);
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm">
        <div className="flex gap-1">
          <p className="flex items-end">
            5. Післядипломна професійна підготовка: навчання
          </p>
          <div className="flex items-center gap-1">
            <span className="flex items-center justify-center h-3 w-3 border border-gray-800">
              {lastEmployee.graduateSchool}
            </span>
            в аспірантурі
            <span className="flex items-center justify-center h-3 w-3 border border-gray-800">
              {lastEmployee.adjunct}
            </span>
            ад'юнктурі
            <span className="flex items-center justify-center h-3 w-3 border border-gray-800">
              {lastEmployee.doctoralStudies}
            </span>
            докторантурі (необхідне відмітити х)
          </div>
        </div>

        <div className="text-sm grid grid-cols-[30%_20%_12%_1fr] pt-2 mb-0.5">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Назва освітнього, наукового закладу
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Диплом, номер, дата видачі
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Рік закінчення
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Науковий ступінь, учене звання
          </div>
        </div>
        {/* тут мапить */}
        {/* строка */}
        {Array.isArray(lastEmployee.postgraduateProfessional) &&
          lastEmployee.postgraduateProfessional.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 grid grid-cols-[30%_20%_12%_1fr] gap-y-0.5 mb-0.5"
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
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {edu.academicBegree}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
