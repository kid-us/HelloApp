import { FlatList } from "react-native";
import ListItem from "../components/ListItem";

function MessageScreen(props) {
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
    <FlatList
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
  );
}

export default MessageScreen;
