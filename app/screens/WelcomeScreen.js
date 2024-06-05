import {
  StyleSheet,
  ImageBackground,
  View,
  Button,
  Image,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("Login Tapped")} />
        <AppButton
          title="Register"
          onPress={() => console.log("Register Tapped")}
          color="secondary"
        />
      </View>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't Need</Text>
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
  buttonContainer: {
    width: "100%",
    padding: 20,
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
  tagline: {
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
