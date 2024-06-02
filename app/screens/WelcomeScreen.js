import {
  StyleSheet,
  ImageBackground,
  View,
  Button,
  Image,
  Text,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't use</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "gold",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
});

export default WelcomeScreen;
