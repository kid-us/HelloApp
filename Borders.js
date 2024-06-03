import { View } from "react-native";

function Borders(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "royalblue",
          borderWidth: 10,
          borderColor: "dodgerblue",
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}

export default Borders;
