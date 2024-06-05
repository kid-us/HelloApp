import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Borders from "./Borders";
import Shadows from "./Shadow";
import Texts from "./Texts";
import Icons from "./Icons";
import AppButton from "./app/components/AppButton";
export default function App() {
  return (
    
    <WelcomeScreen />
    // <View style={styles.container}>
    //   <AppButton title="Login" onPress={() => console.log("Tapped")} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
