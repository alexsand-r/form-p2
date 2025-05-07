import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 10,
    marginBottom: 2, // Reduced margin to decrease vertical space
  },
  section: {
    marginBottom: 7, // Reduced bottom margin for sections
  },
  row: {
    flexDirection: "row",
    marginBottom: 5, // Reduced margin for rows
  },
  label: {
    width: "50%",
    fontSize: 10,
    fontWeight: "bold",
  },
  value: {
    width: "50%",
    fontSize: 10,
    paddingLeft: 5,
    borderBottom: "1px solid #ccc",
  },
  valueLarge: {
    width: "100%",
    fontSize: 10,
    paddingLeft: 5,
    borderBottom: "1px solid #ccc",
  },
  centered: {
    textAlign: "center",
  },
});

export const EndPDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Додаткові відомості</Text>
        <Text style={styles.value}>{employeeItem.additionalInformation}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Дата і причина звільнення (підстава)</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Дата звільнення</Text>
          <Text style={styles.value}>{employeeItem.releaseDateDay}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Причина звільнення</Text>
          <Text style={styles.value}>{employeeItem.reasonForDismissalDay}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Працівник кадрової служби</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Посада</Text>
          <Text style={styles.value}>{employeeItem.position}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>ПІБ</Text>
          <Text style={styles.value}>{employeeItem.lastNameMiddleName}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Підпис працівника</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Дата документу</Text>
          <Text style={styles.value}>{employeeItem.dataDocument}</Text>
        </View>
      </View>
    </View>
  );
};
