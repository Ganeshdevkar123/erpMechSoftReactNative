import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const SubHeader = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#99dae0", "#99dae0", "#85dae0"]}
      style={styles.container}
    >
      <Icon name="bus" size={15} color="#000" />
      <Text>Deliver to User - Location Postal-Code</Text>
      <Icon name="chevron-down" size={15} color="gray" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "skyblue",
    gap: 10,
    paddingHorizontal: 15,
  },
});
