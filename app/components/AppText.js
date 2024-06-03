import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      android: {
        fontSize: 50,
        fontFamily: "Roboto",
      },
      ios: {
        fontSize: 30,
        fontFamily: "Avenir",
      },
    }),
  },
});

export default AppText;
