import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Стили
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    fontSize: 10,
    marginTop: 8,
  },
  label: {
    fontSize: 10,
    marginBottom: 2,
    flexDirection: "row",
    gap: 4,
    flexWrap: "wrap",
  },
  valueFull: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#374151", // gray-700
    paddingLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  valueShort: {
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    paddingLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  flexRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  textNowrap: {
    whiteSpace: "nowrap",
  },
});

// PDF-компонент
export const Point11a12PDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        11. Місце фактичного проживання (область, місто, район, вулиця, N
        будинку, квартири, номер контактного телефону, поштовий індекс)
      </Text>
      <Text style={styles.valueFull}>
        {employeeItem.actualPlaceOfResidence}
      </Text>

      <Text style={styles.label}>
        12. Місце проживання за державною реєстрацією
      </Text>
      <Text style={styles.valueFull}>
        {employeeItem.placeOfResidenceRegistration}
      </Text>

      <View style={styles.flexRow}>
        <Text>Паспорт: серія</Text>
        <Text style={styles.valueShort}>{employeeItem.passportSeries}</Text>
        <Text>N</Text>
        <Text style={styles.valueShort}>{employeeItem.passportNumber}</Text>
        <Text>ким виданий</Text>
      </View>

      <Text style={styles.valueFull}>{employeeItem.byWhomIssued}</Text>

      <View style={styles.flexRow}>
        <Text style={styles.textNowrap}>дата видачі</Text>
        <Text style={styles.valueFull}>{employeeItem.dateOfIssue}</Text>
      </View>
    </View>
  );
};
