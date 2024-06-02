import { StyleSheet, View, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "green", flex: 2 }} />
      <View style={{ backgroundColor: "yellow", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 2 }} />
    </View>
  );
}
