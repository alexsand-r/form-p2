//-- point11a12Form.jsx

import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const Point11a12Form = () => {
  return (
    <>
      <p>
        11. Місце фактичного проживання (область, місто, район, вулиця, N
        будинку, квартири, номер контактного телефону, поштовий індекс){" "}
      </p>
      <Input
        label="Місце проживання:"
        name="actualPlaceOfResidence"
        placeholder="..."
      />
      <p> 12. Місце проживання за державною реєстрацією</p>

      <Input
        label="Місце проживання за державною реєстрацією:"
        name="placeOfResidenceRegistration"
        placeholder="..."
      />
      <div className="grid grid-cols-2 gap-x-2 my-1">
        <Input
          label="Паспорт: серія :"
          name="passportSeries"
          placeholder="..."
        />
        <Input label="Паспорт: N :" name="passportNumber" placeholder="..." />
      </div>
      <div className="grid grid-cols-[70%_1fr] gap-x-2">
        <Input label="ким  виданий :" name="byWhomIssued" placeholder="..." />
        <MyAirDatepicker
          label="дата видачі "
          name="dateOfIssue"
          placeholder="..."
          format="dd.MM.yyyy"
        />
      </div>
    </>
  );
};
