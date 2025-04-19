//--five

export const Point5 = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm">
        <p className="flex items-end">
          5. Післядипломна професійна підготовка: навчання
          <input
            type="checkbox"
            className="mx-1 w-4 h-4 text-blue-600 bg-white border border-blue-600 rounded focus:ring-0"
          />
          в аспірантурі
          <input
            type="checkbox"
            className="mx-1 w-4 h-4 text-blue-600 bg-white border border-blue-600 rounded focus:ring-0"
          />{" "}
          ад'юнктурі
          <input
            type="checkbox"
            className="mx-1 w-4 h-4 text-blue-600 bg-white border border-blue-600 rounded focus:ring-0"
          />{" "}
          докторантурі (необхідне відмітити х)
        </p>
        <div className="text-sm grid grid-cols-[30%_30%_20%_20%] pt-2">
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

          {/* строка */}
          <div className="pl-2 bg-white py-0.5 border-b border-r border-l border-gray-700">
            Луганський машинститут
          </div>
          <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-gray-700">
            ЕН 451256
          </div>
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700">
            1985
          </div>
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700">
            1985
          </div>
        </div>
      </div>
    </>
  );
};
