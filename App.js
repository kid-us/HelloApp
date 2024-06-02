import {
  Dimensions,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <View style={style.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 150, height: 70 }}
      ></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
