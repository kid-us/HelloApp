import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      android: {
        fontSize: 20,
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