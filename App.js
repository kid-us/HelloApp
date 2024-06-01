import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Hello React Native");
  };
  return (
    <View style={styles.container}>
      <Text
        onPress={handlePress}
        numberOfLines={1}
        style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
      >
        Hello World!
      </Text>
      {/* <Text style={{ fontSize: 15, fontWeight: "semibold" }}>
        This is my first React Native App!
      </Text> */}
      <Image
        // blurRadius={1}
        fadeDuration={1000}
        style={styles.logo}
        resizeMode="cover"
        // Static Image
        // source={require("./assets/icon.png")}
        // Images from url
        source={{
          uri: "https://picsum.photos/200/300",
        }}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 500,
    borderRadius: 10,
  },
});
