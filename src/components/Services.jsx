import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Service1 from "../assets/services/amazon-pay.png";
import Service4 from "../assets/services/send-money.jpg";
import Service3 from "../assets/services/scan-qr.jpeg";
import Service2 from "../assets/services/pay-bills.jpeg";

import { Services } from "../data/Services.js";

const Service = () => {
  const renderItem = ({ item }) => (
    <View style={styles.sContainer}>
      <Text>{item.title}</Text>
      <Image style={styles.sImgStyle} source={item.image} />
    </View>
  );
  return (
    <ScrollView
      style={styles.container}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 5 }}
    >
      <View style={styles.fContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Service1} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Service2} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Service3} />
            <Text style={styles.title}>Scan Any QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Service4} />
            <Text style={styles.title}>Recharge & Bills</Text>
          </View>
        </View>
      </View>
      <View style={styles.outerContainer}>
        <FlatList
          data={Services}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.outerContainer}
          horizontal={true}
        />
        {/* {Services.map((item,) => {
          <View style={styles.service}>
            <Image style={styles.imgStyle} source={item.image} />
            <Text>{item.title}</Text>
          </View>;
        })} */}
      </View>
    </ScrollView>
  );
};
export default Service;

const styles = StyleSheet.create({
  container: {
    marginTop: -25,
  },

  fContainer: {
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
  },
  sContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    alignItems: "center",
    gap: 10,
  },

  outerContainer: {
    alignItems: "center",
  },

  innerContainer: {
    padding: 10,
    paddingTop: 15,
    gap: 5,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  sImgStyle: {
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 10,
    color: "#000",
  },
});
