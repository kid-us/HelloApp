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
        }}
      >
        <Text
          style={{
            flex: 1,
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            alignContent: "center",
            color: "#fff",
            fontSize: 40,
            marginTop: 20,
          }}
        >
          Hi
        </Text>
      </View>
    </View>
  );
}

export default Shadows;
