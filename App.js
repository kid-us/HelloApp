import { StyleSheet, View, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
        }}
      />
      <View style={{ backgroundColor: "yellow", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gray", width: 100, height: 100 }} />
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      />
    </View>
  );
}
