import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          onPress={() => console.log("Hello World")}
          numberOfLines={1}
          style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
        >
          Hello World!
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "semibold" }}>
          This is my first React Native App!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
  },

  innerContainer: {
    padding: 30,
  },
});
