export const Button = () => {
  //console.log("itemToEdit в Button:", itemToEdit); // ⬅️ Это важно!
  return (
    <>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="text-white bg-blue-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-400 transition-bg duration-300 border-2 border-inherit hover:border-blue-700"
        >
          {/* {itemToEdit ? "edit item" : "add item "} */}
          Додати
        </button>
      </div>
    </>
  );
};

// export const Button = ({ itemToEdit })
