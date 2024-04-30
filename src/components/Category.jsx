import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Categories } from "../data/Categories";

const Category = ({navigation}) => {
  // const navigation=useNavigation();
  console.log('firstLog',navigation);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.category}
      key={item.id}
      onPress={() => {
        navigation.navigate("Product");
      }}
    >
      <Image style={styles.imgStyle} source={item.image} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
