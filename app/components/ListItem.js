import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ title, image, subTitle, IconComponent, onSwipeLeft }) {
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent && IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
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
    fontSize: 15,
    fontWeight: "500",
  },
});
export default ListItem;
