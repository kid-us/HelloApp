import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Lorem Ipsum"
            subTitle="10 Listing"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
