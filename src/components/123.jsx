<div className="grid grid-cols-2 gap-x-2">
  <MyAirDatepicker
    label="Дата"
    name="dateOfstudy"
    placeholder="..."
    format="yyyy"
  />
  <Input
    label="Назва структурного підрозділу:"
    name="eligibilityMilitary"
    placeholder="..."
  />
  <MyAirDatepicker
    label="Період навчання з"
    name="trainingPeriodWith"
    placeholder="..."
    format="dd.MM.yyyy"
  />
  <MyAirDatepicker
    label="Період навчання по"
    name="trainingPeriod"
    placeholder="..."
    format="dd.MM.yyyy"
  />
  <Input label="Вид навчання:" name="typeOfTraining" placeholder="..." />
  <SelectField
    label="Форма навчання"
    name="onTheJobTraining"
    options={formOfStudy}
    styles={customStyles}
    placeholder="..."
  />
  <div>
    <Input
      label="Назва документа, що посвідчує професійну освіту, ким виданий:"
      name="documentCertifyingProfessional"
      placeholder="..."
    />
    {index > 0 && (
      <div className="absolute -bottom-[50%] right-2 group">
        <button
          type="button"
          onClick={() => remove(index)}
          className="bg-transparent"
        >
          <img src={minus} alt="minus" />
        </button>
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm py-1 px-2 rounded shadow-lg text-nowrap">
          Видалити рядок
        </div>
      </div>
    )}
  </div>

  <div>
    <div className="relative group inline-block">
      <button
        type="button"
        onClick={() =>
          push({
            dateOfstudy: "",
            nameStructuralUnit: "",
            trainingPeriodWith: "",
            trainingPeriod: "",
            typeOfTraining: "",
            onTheJobTraining: "",
            documentCertifyingProfessional: "",
          })
        }
        className="bg-transparent"
      >
        <img src={plus} alt="plus" />
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm py-1 px-2 rounded shadow-lg whitespace-nowrap">
        Додати рядок
      </div>
    </div>
  </div>
</div>;
