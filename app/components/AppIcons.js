import React from "react";

import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcons({ name, bgColor = "#000", size = 40, iconColor = "white" }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   iconContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   textContainer: {
//     justifyContent: "center",
//     alignContent: "center",
//     marginLeft: 10,
//   },
// });

export default AppIcons;
