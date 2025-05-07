import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Стили
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    fontSize: 10,
    marginTop: 8,
  },
  heading: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 4,
  },
  labelBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 4,
  },
  value: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#374151", // gray-700
    paddingLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
  },
  labelOnly: {
    marginBottom: 2,
  },
});

// PDF-компонент
export const ChapterIIPDF = ({ data }) => {
  const employeeItem = data || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК</Text>
      <View style={styles.sectionRow}>
        <View style={styles.column}>
          <View style={styles.labelBlock}>
            <Text>Група обліку</Text>
            <Text style={styles.value}>{employeeItem.accountingGroup}</Text>
          </View>
          <View style={styles.labelBlock}>
            <Text>Категорія обліку</Text>
            <Text style={styles.value}>{employeeItem.categoriaGroup}</Text>
          </View>
          <View style={styles.labelBlock}>
            <Text>Склад</Text>
            <Text style={styles.value}>{employeeItem.composition}</Text>
          </View>
          <View style={styles.labelBlock}>
            <Text>Військове звання</Text>
            <Text style={styles.value}>{employeeItem.militaryRank}</Text>
          </View>
          <View style={styles.labelBlock}>
            <Text>Військово-облікова спеціальність N</Text>
            <Text style={styles.value}>
              {employeeItem.militaryAccountingSpecialty}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.labelBlock}>
            <Text>Придатність до військової служби</Text>
            <Text style={styles.value}>{employeeItem.eligibilityMilitary}</Text>
          </View>
          <View>
            <Text style={styles.labelOnly}>
              Назва райвійськкомату за місцем реєстрації
            </Text>
            <Text style={styles.value}>
              {employeeItem.nameOfDistrictMilitary}
            </Text>
          </View>
          <View>
            <Text style={styles.labelOnly}>
              Назва райвійськкомату за місцем фактичного проживання
            </Text>
            <Text style={styles.value}>{employeeItem.nameDistrictActual}</Text>
          </View>
          <View style={styles.labelBlock}>
            <Text>Перебування на спеціальному обліку</Text>
            <Text style={styles.value}>
              {employeeItem.stayingSpecialRegistration}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
