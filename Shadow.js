import { Text, View } from "react-native";

function Shadows(props) {
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
          borderRadius: 10,
          //   For Android
          elevation: 30,
          //   For IOS
          shadowColor: "red",
          shadowOffset: { width: 10, height: 10 },
          shadowRadius: 30,
          shadowOpacity: 1,
          //   Padding
          padding: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#000",
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
          borderRadius: 10,
          margin: 40,
        }}
      ></View>
    </View>
  );
}

export default Shadows;
