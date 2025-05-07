import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Стили
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
export const EducationalInstitutionsPDF = ({ data }) => {
  const employeeItem = data || {};
  console.log("компонент EducationalInstitutionsPD:", employeeItem); // 👉 здесь лог будет в браузерной консоли
  return (
    <View style={styles.container}>
      {/* Шапка таблицы */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, styles.col1]}>
          Назва освітнього закладу
        </Text>
        <Text style={[styles.headerCell, styles.col2]}>
          Диплом (свідоцтво), серія, номер
        </Text>
        <Text style={[styles.headerCell, styles.col3]}>Рік закінчення</Text>
      </View>

      {/* Список записей */}
      {Array.isArray(employeeItem) &&
        employeeItem.map((edu, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.col1]}>{edu.name}</Text>
            <Text style={[styles.cell, styles.col2]}>{edu.documentNumber}</Text>
            <Text style={[styles.cell, styles.col3, styles.cellLast]}>
              {edu.graduationYear}
            </Text>
          </View>
        ))}
    </View>
  );
};
