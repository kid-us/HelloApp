import React from "react";
import { Image, StyleSheet, View, Platform, StatusBar } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#333",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
