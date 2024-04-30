import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
// import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <View style={styles.inputwsearch}>
          <Icon name="search" size={20} color="#000" />
          <TextInput
            placeholder="Search Amazon.in"
            placeholderTextColor="#848484"
            style={styles.inputtext}
          />
        </View>
        <Icon name="microphone" size={20} color="gray" />
      </View>
      <Icon name="barcode" size={20} color="#900" />

      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      >
        <Text style={styles.container}>Header</Text>
      </LinearGradient> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "skyblue",
    paddingTop: 25,
  },
  inputbox: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#a1bcc0",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    width: "90%",
    paddingHorizontal: 10,
    elevation: 5,
  },
  inputwsearch: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputtext: {
    paddingHorizontal: 10,
  },
});
