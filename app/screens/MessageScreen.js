import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function MessageScreen() {
  const messages = [
    {
      id: 1,
      title: "T 1",
      description: "D 1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T 2",
      description: "D 2",
      image: require("../assets/mosh.jpg"),
    },
  ];

  return (
    <Screen>
      <FlatList
        style={styles.lists}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
