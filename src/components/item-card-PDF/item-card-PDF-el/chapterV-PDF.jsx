// ChapterVPDF.jsx
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    padding: 10,
    fontSize: 10,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    borderTop: "1px solid #4B5563",
    borderBottom: "1px solid #4B5563",
  },
  cell: {
    borderRight: "1px solid #4B5563",
    borderLeft: "1px solid #4B5563",
    padding: 4,
    justifyContent: "center",
  },
  colType: { width: "25%" },
  colPeriod: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  colStart: { flex: 1 },
  colEnd: { flex: 1 },
  colOrder: { flex: 1 },
  boldText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

export const ChapterVPDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>V. ВІДПУСТКИ</Text>

      {/* Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.colType, styles.boldText]}>
          Вид відпустки
        </Text>
        <Text style={[styles.cell, styles.colStart, styles.boldText]}>
          За який період
        </Text>
        <Text style={[styles.cell, styles.colStart, styles.boldText]}>
          Дата початку відпустки
        </Text>
        <Text style={[styles.cell, styles.colEnd, styles.boldText]}>
          Дата закінчення відпустки
        </Text>
        <Text style={[styles.cell, styles.colOrder, styles.boldText]}>
          Підстава, наказ N
        </Text>
      </View>

      {/* Data rows */}
      {Array.isArray(employeeItem.vacations) &&
        employeeItem.vacations.map((el, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.colType]}>
              {el.typeOfVacation}
            </Text>
            <View style={[styles.cell, styles.colStart]}>
              <Text style={styles.textCenter}>{el.forWhatPeriodStart}</Text>
              <Text style={styles.textCenter}>/</Text>
              <Text style={styles.textCenter}>{el.forWhatPeriodEnd}</Text>
            </View>
            <Text style={[styles.cell, styles.colStart]}>
              {el.vacationStartDate}
            </Text>
            <Text style={[styles.cell, styles.colEnd]}>
              {el.vacationEndDate}
            </Text>
            <Text style={[styles.cell, styles.colOrder]}>{el.groundOrder}</Text>
          </View>
        ))}
    </View>
  );
};
