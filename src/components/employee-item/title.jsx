//-- title.jsx
import user from "../../../public/screenshot_2.png";
export const Title = () => {
  return (
    <>
      <div className="flex justify-between px-2 pt-4 bg-gray-50 ">
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
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              12.02.2021
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              2512569856
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              2563254125
            </div>
            <div className="flex items-center justify-center px-1 border-r border-gray-700 bg-white">
              ч
            </div>
            <div className="flex items-center justify-center px-1 bg-white">
              основна
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
              src={user}
              alt="photo"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
//  <div class="relative pb-[41%]">
//     <img class=" absolute top-0 left-0 w-full h-full object-cover rounded-lg rounded-b-none" src="img/blog/01.webp" alt="Image 1">
//  </div>
