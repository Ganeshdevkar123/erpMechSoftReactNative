import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Categories } from "../data/Categories";

const Category = ({ navigation }) => {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.category}
      key={index}
      onPress={() => {
        navigation.navigate("Product", { category: item.title }); // Pass category information
      }}
    >
      <View style={{ backgroundColor: "gold", borderRadius: 50 }}>
        <Image style={styles.imgStyle} source={item.image} />
      </View>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        horizontal={true}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  category: {
    gap: 5,
    padding: 8,
    alignItems: "center",
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
});
