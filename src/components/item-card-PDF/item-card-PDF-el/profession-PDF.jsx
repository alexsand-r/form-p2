import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Стили PDF
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    fontSize: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#374151", // gray-700
    backgroundColor: "#ffffff",
    marginBottom: 2,
  },
  headerCell: {
    textAlign: "center",
    paddingVertical: 2,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderColor: "#374151",
    flexGrow: 1,
  },
  col1: {
    flexBasis: "55%",
  },
  col2: {
    flexBasis: "30%",
  },
  col3: {
    flexBasis: "15%",
    borderRightWidth: 0,
  },
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
    flexGrow: 1,
    paddingLeft: 4,
  },
  cellLast: {
    borderRightWidth: 0,
  },
});

// PDF-компонент
export const ProfessionPDF = ({ data }) => {
  const employeeItem = data || {};
  console.log("Спеціальність / професія -- profession-", employeeItem);

  return (
    <View style={styles.container}>
      {/* Шапка таблицы */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, styles.col1]}>
          Спеціальність (професія) за дипломом (свідоцтвом)
        </Text>
        <Text style={[styles.headerCell, styles.col2]}>
          Кваліфікація за дипломом (свідоцтвом)
        </Text>
        <Text style={[styles.headerCell, styles.col3]}>
          Форма навчання (денна, вечірня, заочна)
        </Text>
      </View>

      {/* Рядки таблицы */}
      {Array.isArray(employeeItem) &&
        employeeItem.map((prof, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.col1]}>{prof.profes}</Text>
            <Text style={[styles.cell, styles.col2]}>{prof.qualification}</Text>
            <Text style={[styles.cell, styles.col3, styles.cellLast]}>
              {prof.formOfStudy}
            </Text>
          </View>
        ))}
    </View>
  );
};
