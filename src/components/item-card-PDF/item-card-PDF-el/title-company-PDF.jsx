import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Стили PDF
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    gap: 16,
  },
  leftBlock: {
    width: "50%",
    paddingBottom: 4,
  },
  centerText: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    fontFamily: "TimesNewRoman",
  },
  bottomBorder: {
    borderBottom: "1px solid #000000",
    marginVertical: 2,
  },
  smallText: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "TimesNewRoman",
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
    marginTop: 4,
  },
  codeLabel: {
    fontSize: 12,
    fontFamily: "TimesNewRoman",
  },
  codeValue: {
    borderBottom: "1px solid #000000",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ffffff",
    fontFamily: "TimesNewRoman",
  },
  rightBlock: {
    width: "43%",
  },
  heading: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "TimesNewRoman",
  },
  paragraph: {
    fontSize: 10,
    fontFamily: "TimesNewRoman",
    lineHeight: 1.2,
  },
});

// PDF-компонент
export const TitleCompanyPDF = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBlock}>
        <Text style={styles.centerText}>{data.nameOfEnterprise}</Text>
        <View style={styles.bottomBorder} />
        <Text style={styles.smallText}>
          Найменування підприємства (установи, організації)
        </Text>

        <View style={styles.codeRow}>
          <Text style={styles.codeLabel}>Код ЄДРПОУ</Text>
          <Text style={styles.codeValue}>{data.edrpoy}</Text>
        </View>
      </View>

      <View style={styles.rightBlock}>
        <Text style={styles.heading}>Типова форма N П-2</Text>
        <Text style={styles.paragraph}>ЗАТВЕРДЖЕНО</Text>
        <Text style={styles.paragraph}>
          наказом Держкомстату та Міністерства оборони
        </Text>
        <Text style={styles.paragraph}>України</Text>
        <Text style={styles.paragraph}>від 25 грудня 2009 р. N 495/656</Text>
      </View>
    </View>
  );
};
