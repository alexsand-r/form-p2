//--eight nine
import { useSelector } from "react-redux";

export const Point89 = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в тайтле", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст

  // useEffect(() => {
  //   console.log("вывожу в стаж роботи: - ", lastEmployee);
  // }, [lastEmployee]);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className=" flex gap-2">
          8. Дата та причина звільнення (скорочення штатів; за власним бажанням,
          за прогул та інші порушення, невідповідність займаній посаді тощо)
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-center self-end">
            {lastEmployee.releaseDate}
          </span>
        </p>
        <div>
          <span className="w-[780px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.reasonForDismissal}
          </span>
        </div>
        <p className=" flex gap-2">
          9. Відомості про отримання пенсії (у разі наявності вказати вид
          пенсійних виплат згідно з чинним законодавством)
        </p>
        <div>
          <span className="w-[780px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.informationAboutReceivingPension}
          </span>
        </div>
      </div>
    </>
  );
};
