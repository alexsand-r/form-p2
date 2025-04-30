// -- end-form
import { Input } from "./input";
import { MyAirDatepicker } from "../../my-air-datepicker";

export const EndForm = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg text-center mt-4">Додаткові відомості </h2>
        <Input
          label="Додаткові відомості:"
          name="additionalInformation"
          placeholder="..."
        />
        <div className="grid grid-cols-2 gap-x-2">
          <MyAirDatepicker
            label="Дата звільнення:"
            name="releaseDateDay"
            placeholder="..."
            format="dd.MM.yyyy"
          />
          <Input
            label="Причина звільнення (підстава) "
            name="reasonForDismissalDay"
            placeholder="..."
          />
        </div>

        <p className="mt-3">Працівник кадрової служби </p>
        <Input label="Посада:" name="position" placeholder="..." />
        <Input
          label="Прізвище, ім'я по батькові:"
          name="lastNameMiddleName"
          placeholder="..."
        />
        <MyAirDatepicker
          label="Дата документу:"
          name="dataDocument"
          placeholder="..."
          format="dd.MM.yyyy"
        />
      </div>
    </>
  );
};
