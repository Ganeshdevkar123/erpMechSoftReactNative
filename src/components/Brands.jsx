import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Brand1 from "../assets/brands/brand1.jpeg";
import Brand2 from "../assets/brands/brand2.jpeg";
import Brand3 from "../assets/brands/brand3.jpeg";
import Brand4 from "../assets/brands/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands Of The Day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand1} style={styles.imgStyle}></Image>
            <Text style={styles.brandTitle}>
              Min. 20% Off | Caratelane Diamond Naklece
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand2} style={styles.imgStyle}></Image>
            <Text style={styles.brandTitle}>
              Min. 40% Off | Fossil, Titan Samrt Watch & More
            </Text>
          </View>
          </View>
          <View style={styles.row}>
            <View style={styles.brands}>
              <Image source={Brand3} style={styles.imgStyle}></Image>
              <Text style={styles.brandTitle}>
               Heels - Upto 50% OFF on Heeled Sandles, High Heels
              </Text>
            </View>
            <View style={styles.brands}>
              <Image source={Brand4} style={styles.imgStyle}></Image>
              <Text style={styles.brandTitle}>
                Sony 60W Blutooth Soundbar Speaker Audio Engine
              </Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  imgStyle: {
    height: 150,
    width: "100%",
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  brands: {
    width: "50%",
    padding:10
  },
  brandTitle:{
    color:'#000',
    marginTop:5,
    fontSize:12
  }
});
