import * as Yup from "yup";

export const validationSchema = Yup.object({
  nameOfEnterprise: Yup.string()
    .transform((value) => value.replace(/^\s+/, ""))
    //.matches(regx.name, "Только буквы, от 5 до 30 символов")
    .required("Введіть назву підприємства"),

  edrpoy: Yup.string()
    .trim()
    .matches(/^\d{8}$/, "Код ЄДРПОУ має складатися з 8 цифр")
    .required("Введіть код ЄДРПОУ"),

  personnelNumber: Yup.string()
    .trim()
    .matches(/^\d+$/, "Табельний номер має складатися лише з чисел")
    .required("Введіть табельний номер"),

  dateOfCompletion: Yup.string().required("Введіть дату ..."),

  individualIdentificationNumber: Yup.string()
    .trim()
    .matches(/^\d{10}$/, "Іден код має складатися з 10 чисел")
    .required("Введіть іден код"),

  sex: Yup.string().required("Виберіть стать ..."),

  typeOfWork: Yup.string().required("Зробіть вибір ..."),

  name: Yup.string()
    .required("Заповніть поле ...")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Тільки літери дозволені"),

  firstName: Yup.string()
    .required("Заповніть поле ...")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Тільки літери дозволені"),

  lastName: Yup.string()
    .required("Заповніть поле ...")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Тільки літери дозволені"),

  dateOfBirth: Yup.string().required("Введіть дату ..."),

  // освита
  education: Yup.string().required("Зробіть вибір ..."),
  // громадянство
  citizenship: Yup.string()
    .required("Заповніть поле ...")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Тільки літери дозволені"),
  educationalInstitutions: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Обов'язково"),
      documentNumber: Yup.string().required("Обов'язково"),
      graduationYear: Yup.date()
        .typeError("Оберіть дату")
        .required("Обов'язково"),
    })
  ),
});
