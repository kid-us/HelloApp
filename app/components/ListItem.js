import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, image, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
