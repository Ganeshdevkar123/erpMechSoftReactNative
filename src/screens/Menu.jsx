
import { ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MenuItemCard from "../components/MenuItemCard";
import { menuData } from "../data/MenuData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Menu = ({ navigation }) => { 

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#98e1d6", "#98e1d6", "#fff"]}>
        <View style={styles.itemCont}>
          {menuData.map((item) => (
            <MenuItemCard title={item.text} img={item.img} />
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerCont: {
    flex: 1,
    height: 400,
    marginTop:50
  },
  itemCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding:10,
  },
});
