import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MenuItemCard = ({title,img}) => {
  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.menuText}>{title}</Text>
          <Image
            style={{ height: 132, width: "100%", resizeMode: "contain"}}
            source={{
              uri: img,
            }}
          />
        </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 150,
    borderRadius: 5,
    backgroundColor:"white",
    padding:5,
    margin:5,
    // gap:10,
    shadowColor:"black",
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.4,
    shadowRadius:10,
  },
  menuText: {
    fontWeight: "600",
    paddingLeft:8,
    paddingTop:5
  },
});