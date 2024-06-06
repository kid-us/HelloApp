import { View, StyleSheet, Image } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Borders from "./Borders";
import Shadows from "./Shadow";
import Texts from "./Texts";
import Icons from "./Icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AppText from "./app/components/AppText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppIcons from "./app/components/AppIcons";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppIcons name="email" size={50} bgColor="tomato" iconColor="white" />
      </Screen>
    </GestureHandlerRootView>
  );
}
