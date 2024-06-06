import React from "react";
import Screen from "./Screen";
import { FlatList, StyleSheet } from "react-native";
import ListItemSeparator from "./ListItemSeparator";
import Card from "./Card";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
