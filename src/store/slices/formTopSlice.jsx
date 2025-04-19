//-- formTopSlice
import { createSlice } from "@reduxjs/toolkit";

const formTopSlice = createSlice({
  name: "formTopTop",
  initialState: {
    nameOfEnterprise: "", // название предприятия
    edrpoy: "", // код ЕДРПОУ
    dateOfCompletion: "", // дата заполнения
    personnelNumber: "", // табельный номер
    individualIdentificationNumber: "", // Індивідуальний ідентифікаційний номер
    sex: "", // стать працивника
    typeOfWork: "", // Вид роботи (основна, за сумісництвом)
    photoOfWorker: "", // Фото робітника
  },
  reducers: {
    setNameOfEnterprise: (state, action) => {
      console.log("название предприятия-", action.payload); // Логирование перед обновлением
      state.nameOfEnterprise = action.payload;
    },
    setEdrpoy: (state, action) => {
      console.log("код ЕДРПОУ-", action.payload);
      state.edrpoy = action.payload;
    },
    setDateOfCompletion: (state, action) => {
      console.log("дата заполнения-", action.payload);
      state.dateOfCompletion = action.payload;
    },
    setPersonnelNumber: (state, action) => {
      console.log("табельный номер-", action.payload);
      state.personnelNumber = action.payload;
    },
    setIndividualIdentificationNumber: (state, action) => {
      console.log("Індивідуальний ідентифікаційний номер-", action.payload);
      state.individualIdentificationNumber = action.payload;
    },
    setSex: (state, action) => {
      console.log("стать працивника-", action.payload);
      state.sex = action.payload;
    },
    setTypeOfWork: (state, action) => {
      console.log("Вид роботи (основна, за сумісництвом)-", action.payload);
      state.typeOfWork = action.payload;
    },
    setPhotoOfWorker: (state, action) => {
      console.log("Фото робітника-", action.payload);
      state.photoOfWorker = action.payload;
    },
  },
});

export default formTopSlice.reducer;
export const {
  setNameOfEnterprise,
  setEdrpoy,
  setDateOfCompletion,
  setPersonnelNumber,
  setIndividualIdentificationNumber,
  setSex,
  setTypeOfWork,
  setPhotoOfWorker,
} = formTopSlice.actions;
