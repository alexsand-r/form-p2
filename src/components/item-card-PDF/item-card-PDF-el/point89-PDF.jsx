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
    gap: 4,
    alignItems: "flex-end",
    marginBottom: 4,
  },
  label: {
    marginRight: 4,
  },
  value: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #4B5563",
    paddingLeft: 4,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left", // ✅ добавлено
  },
  value250: {
    width: 250,
    alignSelf: "flex-end",
  },
  value780: {
    width: 780,
  },
});

export const Point89PDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.container}>
      {/* Row 8 */}
      <View style={styles.row}>
        <Text style={styles.label}>
          8. Дата та причина звільнення (скорочення штатів; за власним бажанням,
          за прогул та інші порушення, невідповідність займаній посаді тощо)
        </Text>
        <Text style={[styles.value, styles.value250]}>
          {employeeItem.releaseDate}
        </Text>
      </View>

      <View style={{ marginBottom: 6 }}>
        <Text style={[styles.value, styles.value780]}>
          {employeeItem.reasonForDismissal}
        </Text>
      </View>

      {/* Row 9 */}
      <View style={styles.row}>
        <Text style={styles.label}>
          9. Відомості про отримання пенсії (у разі наявності вказати вид
          пенсійних виплат згідно з чинним законодавством)
        </Text>
      </View>

      <View>
        <Text style={[styles.value, styles.value780]}>
          {employeeItem.informationAboutReceivingPension}
        </Text>
      </View>
    </View>
  );
};
