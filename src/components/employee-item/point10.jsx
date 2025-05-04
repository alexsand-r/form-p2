//- point10
import { useSelector } from "react-redux";

export const Point10 = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
  return (
    <>
      <div className="px-2 text-sm pt-2">
        <p className=" flex gap-2 items-end">
          10. Родинний стан
          <span className="w-[600px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-center self-end">
            {employeeItem.maritalStatus}
          </span>
        </p>
        <div className="text-sm grid grid-cols-[30%_1fr_20%] pt-2 mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Ступінь родинного зв'язку <br /> (склад сім'ї)
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            П. І. Б.
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Рік народження
          </div>
        </div>

        {/* тут мапить */}
        {/* строка */}
        {Array.isArray(employeeItem.familyComposition) &&
          employeeItem.familyComposition.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 grid grid-cols-[30%_1fr_20%] gap-y-0.5 mb-0.5"
            >
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {edu.degreeOfFamilyRelationship}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {edu.fullName}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {edu.yearOfBirth}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
