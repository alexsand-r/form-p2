//--form-general.jsx

export const FormGeneral = () => {
  return (
    <>
      <h2 className="text-sm font-bold mb-3">І. ЗАГАЛЬНІ ВІДОМОСТІ</h2>
      <form
        action="#"
        className="px-2 bg-gray-50 text-sm py-2 mb-4 shadow-md"
        //   onSubmit={}
      >
        {/* І. ЗАГАЛЬНІ ВІДОМОСТІ  */}

        <div className="grid grid-cols-2 gap-y-0.5 gap-x-4 mb-4">
          {/* Прізвище */}
          <div>
            <label className="text-sm" htmlFor="nickname">
              Прізвище
            </label>
            <input
              // onChange={}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
              name="nickname"
              type="text"
              id="nickname"
              // value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/*  Громадянство */}
          <div>
            <label className="text-sm" htmlFor="citizenship">
              Громадянство
            </label>
            <input
              // onChange={}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
              name="citizenship"
              type="text"
              id="citizenship"
              // value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/*  Ім'я*/}
          <div>
            <label className="text-sm" htmlFor="nameEmployee">
              Ім'я
            </label>
            <input
              // onChange={}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-2"
              name="nameEmployee"
              type="text"
              id="nameEmployee"
              // value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Дата народження */}
          <div>
            <label className="text-sm" htmlFor="dateOfbirth">
              Дата народження
            </label>
            <input
              // onChange={}
              className="shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500  w-full px-2.5 py-2"
              name="dateOfbirth"
              id="dateOfbirth"
              type="number"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* По батькові */}
          <div>
            <label className="text-sm" htmlFor="middleName">
              По батькові
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="middleName"
              id="middleName"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
          {/* Освіта */}
          <div>
            <label className="text-sm" htmlFor="education">
              Освіта
            </label>
            <input
              // onChange={}
              className="capitalize shadow-md text-lg bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 block w-full px-2.5 py-2"
              name="education"
              id="education"
              type="text"
              //value={} // Устанавливаем значение инпута из Redux
            />
          </div>
        </div>

        {/* кнопка */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-400 transition-bg duration-300 border-2 border-inherit hover:border-blue-700"
          >
            add item
          </button>
        </div>
      </form>
    </>
  );
};
