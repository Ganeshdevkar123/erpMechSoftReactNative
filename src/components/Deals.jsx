import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Recommended from "../assets/recommend.jpg";

const Deals = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Deals For You</Text>
      <Image source={Recommended} style={styles.imgStyle}></Image>
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Cart")}} style={styles.offDealBtn}>
            <Text style={styles.offDeal}>18% Off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dPrice}>₹ 1,549.00</Text>
          <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.actualPrice}>₹ 1,895.00</Text>
        </View>
        <Text style={styles.productDesc}>Face wash gentle skin cleaner for all skin type </Text>
        <Text style={styles.allDeals}>See All Deals </Text>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  imgStyle: {
    height: 250,
    width: "100%",
  },
  bottomSection: {
    padding: 10,
  },
  offDealBtn: {
    backgroundColor: "red",
    color: "#fff",
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: "center",
  },
  offDeal: {
    fontSize: 12,
    color: "#fff",
  },
  deal: {
    color: "red",
    fontWeight: "600",
    fontSize: 12,
    marginLeft:10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dPrice: {
    fontSize: 16,
    color: "#000",
    marginVertical: 5,
  },
  mrp: {
    fontSize: 10,
    marginHorizontal: 5,
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine:'line-through'
  },
  productDesc:{
    fontSize:14,
    color:'#000'
  },
  allDeals:{
    color:'#017185',
    fontSize:14,
    paddingTop:10
  }
});
