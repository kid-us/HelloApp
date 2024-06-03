import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

function Icons(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons
        name="email"
        size={100}
        color="dodgerblue"
      ></MaterialCommunityIcons>
    </View>
  );
}

export default Icons;
