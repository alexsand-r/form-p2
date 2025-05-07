// ChapterIVPDF.jsx
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
  },
  cell: {
    border: "1px solid #4B5563",
    padding: 3,
    justifyContent: "center",
    flexWrap: "wrap",
    wordBreak: "break-word", // 🧠 помогает с длинными словами
  },
  colDate: { width: "10%" },
  colUnit: { flex: 1 },
  colProfession: {
    width: "15%",
  },
  colCode: { width: "10%" },
  colSalary: { width: "10%" },
  colOrder: { width: "17%" },
  colSignature: { width: "13%" },
  note: {
    fontSize: 9,
    marginTop: 5,
  },
});

export const ChapterIVPDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ</Text>

      {/* Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.colDate]}>Дата</Text>
        <Text style={[styles.cell, styles.colUnit]}>
          Назва структурного підрозділу
        </Text>
        <Text style={[styles.cell, styles.colProfession]}>
          Професія, посада назва
        </Text>
        <Text style={[styles.cell, styles.colCode]}>
          Професія, посада код за КП*
        </Text>
        <Text style={[styles.cell, styles.colSalary]}>Розряд (оклад)</Text>
        <Text style={[styles.cell, styles.colOrder]}>Підстава, наказ N</Text>
        <Text style={[styles.cell, styles.colSignature]}>
          Підпис працівника
        </Text>
      </View>

      {/* Data rows */}
      {Array.isArray(employeeItem.assignmentAndTransfer) &&
        employeeItem.assignmentAndTransfer.map((el, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.colDate]}>{el.dateOfstudy}</Text>
            <Text style={[styles.cell, styles.colUnit]}>
              {el.nameStructuralUnit}
            </Text>
            <Text style={[styles.cell, styles.colProfession]} wrap>
              {el.professionName}
            </Text>
            <Text style={[styles.cell, styles.colCode]}>{el.codeForCP}</Text>
            <Text style={[styles.cell, styles.colSalary]}>{el.salary}</Text>
            <Text style={[styles.cell, styles.colOrder]}>{el.groundOrder}</Text>
            <Text style={[styles.cell, styles.colSignature]}>
              {el.employeeSignatur}
            </Text>
          </View>
        ))}

      <Text style={styles.note}>
        * Відповідно до Класифікатора професій ДК 003-2005, затвердженого
        наказом Держстандарту України від 26.12.2005 N 375, з урахуванням
        позначки кваліфікаційного рівня (6 знаків, наприклад, код професії
        "муляр" - 7122.2).
      </Text>
    </View>
  );
};
