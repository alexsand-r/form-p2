import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Стили PDF-документа
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 8,
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    marginBottom: 4,
  },
  label: {
    marginRight: 4,
  },
  value: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #4B5563", // border-b-gray-700
    paddingLeft: 4,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 4,
    minHeight: 16,
    textAlign: "left",
  },
  value200: {
    width: 200,
  },
  value250: {
    width: 250,
  },
  value50: {
    width: 50,
  },
  rightAlign: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export const Point67PDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.container}>
      {/* Row 6 */}
      <View style={styles.row}>
        <Text style={styles.label}>6. Останнє місце роботи</Text>
        <Text style={[styles.value, styles.value200]}>
          {employeeItem.lastPlaceOfWork}
        </Text>
        <Text style={styles.label}>посада (професія)</Text>
        <Text style={[styles.value, styles.value200]}>
          {employeeItem.positionProfession}
        </Text>
      </View>

      {/* Row 7 */}
      <View style={styles.row}>
        <Text style={styles.label}>7. Стаж роботи станом на</Text>
        <Text style={[styles.value, styles.value250]}>
          {employeeItem.workExperience}
        </Text>
        <Text style={styles.label}>Загальний</Text>
        <Text style={[styles.value, styles.value50]}>
          {employeeItem.genaralDay}
        </Text>
        <Text style={styles.label}>днів</Text>
        <Text style={[styles.value, styles.value50]}>
          {employeeItem.genaralMounth}
        </Text>
        <Text style={styles.label}>місяців</Text>
        <Text style={[styles.value, styles.value50]}>
          {employeeItem.genaralYears}
        </Text>
        <Text style={styles.label}>років,</Text>
      </View>

      {/* Right aligned row */}
      <View style={styles.rightAlign}>
        <View style={styles.row}>
          <Text style={styles.label}>
            що дає право на надбавку за вислугу років
          </Text>
          <Text style={[styles.value, styles.value50]}>
            {employeeItem.serviceDays}
          </Text>
          <Text style={styles.label}>днів</Text>
          <Text style={[styles.value, styles.value50]}>
            {employeeItem.monthsOfService}
          </Text>
          <Text style={styles.label}>місяців</Text>
          <Text style={[styles.value, styles.value50]}>
            {employeeItem.yearsOfService}
          </Text>
          <Text style={styles.label}>років.</Text>
        </View>
      </View>
    </View>
  );
};
