import React from "react";
import { Text, View } from "react-native";

function Texts(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          //   fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Hello React Native! This is my first React Native App
      </Text>
    </View>
  );
}

export default Texts;
