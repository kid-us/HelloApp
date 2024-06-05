import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default Card;
