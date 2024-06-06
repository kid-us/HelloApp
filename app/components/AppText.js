import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontSize: 10,
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
