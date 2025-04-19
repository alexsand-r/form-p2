//--form

import { FormGeneral } from "./form-general";
import { FormTop } from "./form-top";

export const Form = () => {
  return (
    <>
      <div className="">
        <h1 className="text-sm font-bold mb-3">Форма Т-2</h1>
        <FormTop />
        <FormGeneral />
      </div>
    </>
  );
};
