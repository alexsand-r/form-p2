// тут експорт стили для селектов

// селек стать --- опції
export const options = [
  { value: "ч", label: "чоловіча" },
  { value: "ж", label: "жіноча" },
];
// селект від зайнятості --- опції
export const optionsTypeWork = [
  { value: "основна", label: "основна" },
  { value: "сумісництво", label: "сумісництво" },
];
// селект освіта --- опції
export const education = [
  { value: "базова загальна середня", label: "базова загальна середня" },
  { value: "повна загальна середня", label: "повна загальна середня" },
  { value: "професійно-технічна", label: "професійно-технічна" },
  { value: "неповна вища", label: "неповна вища" },
  { value: "базова вища", label: "базова вища" },
  { value: "повна вища", label: "повна вища" },
];
// селект форма навчання (денна, вечірня, заочна) --- опції
export const formOfStudy = [
  { value: "денна", label: "денна" },
  { value: "вечірня", label: "вечірня" },
  { value: "заочна", label: "заочна" },
];

// тут стилі для селекта
export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "35px", // ключевая строка: задаёт минимальную высоту
    height: "35px", // принудительная высота
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9fafb",
    borderWidth: "2px",
    borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
    borderRadius: "0.5rem",
    fontSize: "1.125rem",
    color: "#111827",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover": {
      borderColor: "none",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "35px", // чтобы контент тоже соответствовал высоте
    padding: "0 8px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "35px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e5e7eb" : "#fff",
    color: "#111827",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#111827",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280",
  }),
};
