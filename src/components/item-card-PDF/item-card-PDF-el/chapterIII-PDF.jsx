import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Стили для PDF
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
    // Удалён borderBottom
  },
  cell: {
    border: "1px solid #4B5563", // Каждая ячейка со своим бордером
    padding: 3,
    justifyContent: "center",
    textAlign: "center",
  },
  colDate: { width: "10%" },
  colUnit: { width: "auto", flex: 1 },
  colPeriod: { width: "10%" },
  colType: { width: "15%" },
  colForm: { width: "15%" },
  colDoc: { flex: 1 },

  trainingPeriod: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export const ChapterIIIPDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>
        ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК
        ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
      </Text>

      {/* Заголовок */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.colDate]}>Дата</Text>
        <Text style={[styles.cell, styles.colUnit]}>
          Назва структурного підрозділу
        </Text>
        <Text style={[styles.cell, styles.colPeriod]}>
          Період навчання{"\n"}з / по
        </Text>
        <Text style={[styles.cell, styles.colType]}>Вид навчання</Text>
        <Text style={[styles.cell, styles.colForm]}>Форма навчання</Text>
        <Text style={[styles.cell, styles.colDoc]}>
          Назва документа, що посвідчує професійну освіту, ким виданий
        </Text>
      </View>

      {/* Данные */}
      {Array.isArray(employeeItem.onTheJob) &&
        employeeItem.onTheJob.map((job, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, styles.colDate]}>{job.dateOfstudy}</Text>
            <Text style={[styles.cell, styles.colUnit]}>
              {job.nameStructuralUnit}
            </Text>
            <View style={[styles.cell, styles.colPeriod]}>
              <View style={styles.trainingPeriod}>
                <Text>{job.trainingPeriodWith}</Text>
                <Text>{job.trainingPeriod}</Text>
              </View>
            </View>
            <Text style={[styles.cell, styles.colType]}>
              {job.typeOfTraining}
            </Text>
            <Text style={[styles.cell, styles.colForm]}>{job.formOfStudy}</Text>
            <Text style={[styles.cell, styles.colDoc]}>
              {job.documentCertifyingProfessional}
            </Text>
          </View>
        ))}
    </View>
  );
};
