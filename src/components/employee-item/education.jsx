//--education

export const Education = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm grid grid-cols-[55%_30%_15%] pt-2">
        <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
          Назва освітнього закладу
        </div>
        <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
          Диплом (свідоцтво), серія, номер
        </div>
        <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
          Рік закінчення
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
      </div>
      {/* профессия квалификация диплом */}
      <div className="px-2 bg-gray-50 text-sm grid grid-cols-[55%_30%_15%]">
        <div className="flex justify-center  items-center font-bold text-center bg-white py-0.5 border-b border-r border-l border-gray-700">
          Спеціальність (професія) за дипломом (свідоцтвом)
        </div>
        <div className="flex items-center justify-center font-bold text-center bg-white py-0.5 border-b border-r border-gray-700">
          Кваліфікація за дипломом (свідоцтвом)
        </div>
        <div className="flex items-center font-bold text-center bg-white py-0.5 border-b border-r border-gray-700">
          Форма навчання (денна, вечірня, заочна)
        </div>
        {/* строка */}
        <div className="pl-2 bg-white py-0.5 border-b border-r border-l border-gray-700">
          Бухгалтер
        </div>
        <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-gray-700">
          магистр
        </div>
        <div className="text-center bg-white py-0.5 border-b border-r border-gray-700">
          денна
        </div>
      </div>
    </>
  );
};
