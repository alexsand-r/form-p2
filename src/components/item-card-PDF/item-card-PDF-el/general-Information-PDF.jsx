import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
//import userPhoto from "../../../public/photo.svg"; // Преобразуй в base64 или импортируй как URL

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row", // если ты хочешь поведение как justify-between по горизонтали
    justifyContent: "space-between",
    paddingHorizontal: 8, // это эквивалент px-2
    paddingTop: 16, // это эквивалент pt-4
  },
  imageWrapper: {
    position: "relative",
    width: 105, // 115 px
    height: 133, // 143 px
    marginTop: -50, // Поднимаем вверх на 50 пикселей
  },
  leftBlock: {
    flex: 1,
  },
  table: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    border: "1px solid black",
    fontSize: 10,
    textAlign: "center",
  },
  cell: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    width: "20%",
    height: 30,
  },
  whiteCell: {
    backgroundColor: "#ffffff",
  },
  titleSection: {
    marginTop: 8,
  },
  titleText: {
    fontSize: 14,
    textAlign: "right",
    paddingRight: 40,
  },
  boldText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  photoBlock: {
    width: 115,
    height: 143,
    border: "1px solid black",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
  },
  content: {
    paddingHorizontal: 8,
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 4,
  },
  input: {
    borderBottom: "1px solid black",
    backgroundColor: "#ffffff",
    fontSize: 12,
    paddingLeft: 8,
    marginLeft: 4,
    marginRight: 8,
    textTransform: "uppercase",
  },
  fullWidthInput: {
    borderBottom: "1px solid black",
    backgroundColor: "#ffffff",
    fontSize: 12,
    paddingLeft: 8,
    marginTop: 4,
    textAlign: "center",
  },
});

export const GeneralInformationPDF = ({ data }) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.leftBlock}>
          <View style={styles.table}>
            {[
              "Дата заповнення",
              "Табельний номер",
              "Індивідуальний ідентифікаційний номер",
              "Стать (чоловіча, жіноча)",
              "Вид роботи (основна, за сумісництвом)",
            ].map((text, idx) => (
              <View key={idx} style={styles.cell}>
                <Text>{text}</Text>
              </View>
            ))}
            {[
              data.dateOfCompletion,
              data.personnelNumber,
              data.individualIdentificationNumber,
              data.sex,
              data.typeOfWork,
            ].map((val, idx) => (
              <View key={idx} style={[styles.cell, styles.whiteCell]}>
                <Text>{val}</Text>
              </View>
            ))}
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.titleText}>ОСОБОВА КАРТКА ПРАЦІВНИКА</Text>
            <Text style={styles.boldText}>І. ЗАГАЛЬНІ ВІДОМОСТІ</Text>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image src={data.photoOfWorker} style={styles.image} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={{ marginRight: 12 }}>1. Прізвище</Text>
          <Text style={[styles.input, { width: 180, marginRight: 16 }]}>
            {data.name}
          </Text>

          <Text style={{ marginRight: 12 }}>Ім'я</Text>
          <Text style={[styles.input, { width: 180, marginRight: 16 }]}>
            {data.firstName}
          </Text>

          <Text style={{ marginRight: 12 }}>По батькові</Text>
          <Text style={[styles.input, { width: 180 }]}>{data.lastName}</Text>
        </View>

        <View style={styles.row}>
          <Text>2. Дата народження</Text>
          <Text style={[styles.input, { width: 170 }]}>{data.dateOfBirth}</Text>
          <Text>3. Громадянство</Text>
          <Text style={[styles.input, { width: 250 }]}>{data.citizenship}</Text>
        </View>

        <Text style={{ marginTop: 4 }}>
          4. Освіта (базова загальна середня, повна загальна середня,
          професійно-технічна, неповна вища, базова вища, повна вища)
        </Text>
        <Text style={[styles.fullWidthInput]}>{data.education}</Text>
      </View>
    </>
  );
};
