//-- itemsSlice

import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeArr: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      // action.payload = formattedValues
      if (
        action.payload.nameOfEnterprise !== "" &&
        action.payload.edrpoy !== ""
      ) {
        state.employeeArr.push({
          id: nanoid(),
          nameOfEnterprise: action.payload.nameOfEnterprise,
          edrpoy: action.payload.edrpoy,
          dateOfCompletion: action.payload.dateOfCompletion,
          personnelNumber: action.payload.personnelNumber,
          individualIdentificationNumber:
            action.payload.individualIdentificationNumber,
          sex: action.payload.sex,
          typeOfWork: action.payload.typeOfWork,
          photoOfWorker: action.payload.photoOfWorker,
          name: action.payload.name,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          dateOfBirth: action.payload.dateOfBirth,
          education: action.payload.education,
          citizenship: action.payload.citizenship,
          educationalInstitutions: action.payload.educationalInstitutions, // ✅ для таблицы учебные заведения
          profession: action.payload.profession, // ✅ для таблицы профессия специальность
        });
        console.log("список работников:", state.employeeArr); // ✅ массив после добавления
      } else {
        console.log("все поля должны быть заполнены");
      }
    },
    removeEmployee: (state, action) => {
      state.employeeArr = state.employeeArr.filter(
        (el) => el.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      const {
        id,
        nameOfEnterprise,
        dateOfCompletion,
        edrpoy,
        personnelNumber,
        individualIdentificationNumber,
        sex,
        typeOfWork,
        photoOfWorker,
        name,
        firstName,
        lastName,
        dateOfBirth,
        education,
        citizenship,
        educationalInstitutions,
        profession,
      } = action.payload;
      const itemToEdit = state.employeeArr.find((el) => el.id === id);
      if (itemToEdit) {
        itemToEdit.nameOfEnterprise = nameOfEnterprise;
        itemToEdit.edrpoy = edrpoy;
        itemToEdit.edrpoy = dateOfCompletion;
        itemToEdit.edrpoy = personnelNumber;
        itemToEdit.edrpoy = individualIdentificationNumber;
        itemToEdit.edrpoy = sex;
        itemToEdit.edrpoy = typeOfWork;
        itemToEdit.edrpoy = photoOfWorker;
        itemToEdit.edrpoy = name;
        itemToEdit.edrpoy = firstName;
        itemToEdit.edrpoy = lastName;
        itemToEdit.edrpoy = dateOfBirth;
        itemToEdit.edrpoy = education;
        itemToEdit.edrpoy = citizenship;
        itemToEdit.edrpoy = educationalInstitutions;
        itemToEdit.edrpoy = profession;
      }
      console.log("Click on Edit btn");
    },
  },
});

export default employeeSlice.reducer;
export const { addEmployee, removeEmployee, editEmployee } =
  employeeSlice.actions;
