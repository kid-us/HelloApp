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
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/components/ListingScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
