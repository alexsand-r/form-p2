import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Стили для PDF
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    fontSize: 10,
  },
  titleRow: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 4,
  },
  titleText: {
    fontSize: 10,
  },
  maritalStatus: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#374151", // gray-700
    paddingLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  gridHeader: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#374151", // gray-700
    backgroundColor: "#ffffff",
    marginBottom: 2,
  },
  cellHeader: {
    textAlign: "center",
    paddingVertical: 2,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderColor: "#374151",
  },
  col1: { flex: 3 },
  col2: { flex: 3 },
  col3: { flex: 1.5 },
  row: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#374151",
    marginBottom: 2,
  },
  cell: {
    textAlign: "center",
    paddingVertical: 2,
    borderRightWidth: 1,
    borderColor: "#374151",
    paddingLeft: 4,
  },
  cellLast: {
    borderRightWidth: 0,
  },
});

// PDF-компонент
export const Point10PDF = ({ data }) => {
  const employeeItem = data || {};
  return (
    <View style={styles.container}>
      {/* Первая строка с семейным состоянием */}
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>10. Родинний стан</Text>
        <Text style={styles.maritalStatus}>{employeeItem.maritalStatus}</Text>
      </View>

      {/* Заголовки таблицы */}
      <View style={styles.gridHeader}>
        <Text
          style={[
            styles.cellHeader,
            styles.col1,
            { borderLeftWidth: 1, borderLeftColor: "black" },
          ]}
        >
          Ступінь родинного зв'язку <br /> (склад сім'ї)
        </Text>

        <Text style={[styles.cellHeader, styles.col2]}>П. І. Б.</Text>
        <Text style={[styles.cellHeader, styles.col3]}>Рік народження</Text>
      </View>

      {/* Рядки таблицы */}
      {Array.isArray(employeeItem.familyComposition) &&
        employeeItem.familyComposition.map((edu, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.col1]}>
              {edu.degreeOfFamilyRelationship}
            </Text>
            <Text style={[styles.cell, styles.col2]}>{edu.fullName}</Text>
            <Text style={[styles.cell, styles.col3, styles.cellLast]}>
              {edu.yearOfBirth}
            </Text>
          </View>
        ))}
    </View>
  );
};
