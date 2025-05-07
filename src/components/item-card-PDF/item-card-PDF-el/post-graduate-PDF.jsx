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
    flexWrap: "wrap",
  },
  titleText: {
    fontSize: 10,
    marginRight: 4,
  },
  markBox: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: "#1f2937", // gray-800
    textAlign: "center",
    fontSize: 8,
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
  col2: { flex: 2 },
  col3: { flex: 1.2 },
  col4: { flex: 4, borderRightWidth: 0 },
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
export const PostGraduatePDF = ({ data }) => {
  const employeeItem = data || {};
  console.log("після дипломна підготовкаPostGraduatePDF-", employeeItem);
  return (
    <View style={styles.container}>
      {/* Первая строка с checkbox-ами */}
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>
          5. Післядипломна професійна підготовка: навчання
        </Text>
        <Text style={styles.markBox}>
          {employeeItem.graduateSchool ? "х" : ""}
        </Text>
        <Text style={styles.titleText}>в аспірантурі</Text>
        <Text style={styles.markBox}>{employeeItem.adjunct ? "х" : ""}</Text>
        <Text style={styles.titleText}>ад'юнктурі</Text>
        <Text style={styles.markBox}>
          {employeeItem.doctoralStudies ? "х" : ""}
        </Text>
        <Text style={styles.titleText}>
          докторантурі (необхідне відмітити х)
        </Text>
      </View>

      {/* Заголовки таблицы */}
      <View style={styles.gridHeader}>
        <Text style={[styles.cellHeader, styles.col1]}>
          Назва освітнього, наукового закладу
        </Text>
        <Text style={[styles.cellHeader, styles.col2]}>
          Диплом, номер, дата видачі
        </Text>
        <Text style={[styles.cellHeader, styles.col3]}>Рік закінчення</Text>
        <Text style={[styles.cellHeader, styles.col4]}>
          Науковий ступінь, учене звання
        </Text>
      </View>

      {/* Рядки таблицы */}
      {Array.isArray(employeeItem.postgraduateProfessional) &&
        employeeItem.postgraduateProfessional.map((edu, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.col1]}>{edu.name}</Text>
            <Text style={[styles.cell, styles.col2]}>{edu.documentNumber}</Text>
            <Text style={[styles.cell, styles.col3]}>{edu.graduationYear}</Text>
            <Text style={[styles.cell, styles.col4, styles.cellLast]}>
              {edu.academicBegree}
            </Text>
          </View>
        ))}
    </View>
  );
};

//
