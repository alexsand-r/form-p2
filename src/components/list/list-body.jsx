//-- list-body

export const ListBody = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm py-2 mb-4 shadow-md">
        <div className="text-sm grid grid-cols-[10%_1fr_15%_15%_15%]">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            №
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            П.І.Б.
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            переглянути
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            редагувати
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            статус
          </div>
        </div>
      </div>
      <div className="px-2 bg-gray-50 text-sm py-2 shadow-md flex flex-col gap-0.5">
        <div className="text-sm grid grid-cols-[10%_1fr_15%_15%_15%]">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            <span>1</span>
          </div>
          <div className="capitalize flex gap-3 pl-2 font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <span>петров</span>
            <span>олександр</span>
            <span>петрович</span>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-green-500 px-1 text-white hover:bg-green-600 transition-bg duration-300"
            >
              переглянути
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-amber-500 px-1 text-white hover:bg-amber-600 transition-bg duration-300"
            >
              редагувати
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            статус
          </div>
        </div>
        <div className="text-sm grid grid-cols-[10%_1fr_15%_15%_15%]">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            <span>1</span>
          </div>
          <div className="capitalize flex gap-3 pl-2 font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <span>петров</span>
            <span>олександр</span>
            <span>петрович</span>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-green-500 px-1 text-white hover:bg-green-600 transition-bg duration-300"
            >
              переглянути
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-amber-500 px-1 text-white hover:bg-amber-600 transition-bg duration-300"
            >
              редагувати
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            статус
          </div>
        </div>
        <div className="text-sm grid grid-cols-[10%_1fr_15%_15%_15%]">
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            <span>1</span>
          </div>
          <div className="capitalize flex gap-3 pl-2 font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <span>петров</span>
            <span>олександр</span>
            <span>петрович</span>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-green-500 px-1 text-white hover:bg-green-600 transition-bg duration-300"
            >
              переглянути
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            <button
              type="button"
              className="cursor-pointer bg-amber-500 px-1 text-white hover:bg-amber-600 transition-bg duration-300"
            >
              редагувати
            </button>
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            статус
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-400 p-0.5 text-white fixed top-[3%] right-[10%] cursor-pointer hover:bg-blue-500 transition-bg duration-300"
      >
        додати працівника
      </button>
    </>
  );
};
