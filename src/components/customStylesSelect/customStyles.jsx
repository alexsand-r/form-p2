// тут експорт стили для селектов

// селек стать
export const options = [
  { value: "ч", label: "чоловіча" },
  { value: "ж", label: "жіноча" },
];
// селект від зайнятості
export const optionsTypeWork = [
  { value: "основна", label: "основна" },
  { value: "сумісництво", label: "сумісництво" },
];
// селект освіта
export const education = [
  { value: "базова загальна середня", label: "базова загальна середня" },
  { value: "повна загальна середня", label: "повна загальна середня" },
  { value: "професійно-технічна", label: "професійно-технічна" },
  { value: "неповна вища", label: "неповна вища" },
  { value: "базова вища", label: "базова вища" },
  { value: "повна вища", label: "повна вища" },
];
// селект форма навчання (денна, вечірня, заочна)
export const formOfStudy = [
  { value: "денна", label: "денна" },
  { value: "вечірня", label: "вечірня" },
  { value: "заочна", label: "заочна" },
];

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    margin: "0", //
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
    backgroundColor: "#f9fafb", // bg-gray-50
    borderWidth: "2px",
    borderColor: state.isFocused ? "#3b82f6" : "#d1d5db", // focus:border-blue-500 or border-gray-300
    borderRadius: "0.5rem", // rounded-lg
    //paddingLeft: "0.625rem", // px-2.5
    paddingTop: "3px", // py-2
    paddingBottom: "3px",
    fontSize: "1.125rem", // text-lg
    color: "#111827", // text-gray-900
    width: "100%",
    "&:hover": {
      borderColor: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e5e7eb" : "#fff", // hover:bg-gray-200
    color: "#111827",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#111827", // text-gray-900
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280", // text-gray-400
  }),
};
