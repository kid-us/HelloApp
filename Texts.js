import React from "react";
import { View } from "react-native";
import AppText from "./app/components/AppText";

function Texts(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>Hello React Native! This is my first React Native App</AppText>
    </View>
  );
}

export default Texts;
