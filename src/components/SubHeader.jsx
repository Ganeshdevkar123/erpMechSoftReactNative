import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SubHeader = () => {
  return (
      <View style={styles.container}>
          <Icon name="bus" size={15} color="#000" />
          <Text>Deliver to User - Location Postal-Code</Text>
          <Icon name="chevron-down" size={15} color="#000" />
      </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        flexDirection: "row",
        // justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "skyblue",
        gap:10,
        paddingHorizontal:15
      },
});
