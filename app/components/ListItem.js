import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, image, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 35,
    marginRight: 15,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
});
export default ListItem;
