import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchFilter from "./SearchFilter";

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },
  { id: 4, name: "grape" },
  { id: 5, name: "strawberry" },
  { id: 6, name: "pineapple" },
  { id: 7, name: "watermelon" },
  { id: 8, name: "kiwi" },
  { id: 9, name: "peach" },
  { id: 10, name: "pear" },
  { id: 11, name: "plum" },
  { id: 12, name: "blueberry" },
  { id: 13, name: "raspberry" },
  { id: 14, name: "cherry" },
  { id: 15, name: "apricot" },
  { id: 16, name: "mango" },
  { id: 17, name: "melon" },
  { id: 18, name: "lemon" },
  { id: 19, name: "lime" },
  { id: 20, name: "coconut" },
  { id: 21, name: "fig" },
];

const Header = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputbox}>
          <View style={styles.inputwsearch}>
            <Icon name="search" size={20} color="#000" />
            <TextInput
              value={input}
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
              style={styles.inputtext}
              onChangeText={(text) => setInput(text)}
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
      {/* <SearchFilter style={styles.filterContainer} data={data} input={input} setInput={setInput} /> */}
    </>
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
  filterContainer: {
    position: "absolute",
    zIndex: 999,
  },
});
