import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

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
        Hello React Native World!
      </Text>

      {/* Touchable */}
      <TouchableHighlight onPress={() => console.log("Image Clicked")}>
        {/* Images */}
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
      </TouchableHighlight>

      {/* Buttons */}

      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() =>
              Alert.alert("My Title", "Message", [
                {
                  text: "No",
                  onPress: () => console.log("Left button No Pressed"),
                },
                {
                  text: "Yes",
                  onPress: () => console.log("Left button Yes Pressed"),
                },
              ])
            }
          />
          <Button
            title="Right button"
            onPress={() =>
              Alert.alert("My Title", "My Message", [
                {
                  text: "Yes",
                  onPress: () => console.log("Right button Yes Pressed"),
                },
                {
                  text: "No",
                  onPress: () => console.log("Right button No Pressed"),
                },
              ])
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "dodgerblue",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
