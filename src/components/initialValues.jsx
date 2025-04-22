// -- initialValues значение полей формы вынес из формика
export const initialValues = {
  nameOfEnterprise: "", // название предприятия
  edrpoy: "", // код ЕДРПОУ
  dateOfCompletion: "", // дата заполнения
  personnelNumber: "", // табельный номер
  individualIdentificationNumber: "", // Індивідуальний ідентифікаційний номер
  sex: "", // стать працивника
  typeOfWork: "", // Вид роботи (основна, за сумісництвом)
  photoOfWorker: "", // Фото робітника
  name: "", // призвище
  firstName: "", // ім'я
  lastName: "", // по батькови
  dateOfBirth: "", // дата рождения
  education: "", // освита
  citizenship: "", // громадянство
  // для добавления учебного заведения
  educationalInstitutions: [
    {
      name: "",
      documentNumber: "",
      graduationYear: "",
    },
  ],
  profession: [
    {
      profes: "",
      qualification: "",
      formOfStudy: "",
    },
  ],
};
