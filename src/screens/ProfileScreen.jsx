import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Logo from "../../assets/amazon.png";
import ProfileCard from "../components/ProfileCrad";
import { LinearGradient } from "expo-linear-gradient";
import OrderCard from "../components/OrderCard";
import AccountCard from "../components/AccountCard";
import {
  accountData,
  infoData,
  OrderData,
  WishListData,
} from "../data/ProfileData";

const ProfileScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#98e1d6", "#98e1d6", "#fff"]}>
        <View style={styles.titleCont}>
          <MaterialIcons
            name="account-circle"
            color={"#b0b0b0"}
            size={35}
            style={{
              borderRadius: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Text> </Text>
          <Text style={styles.titleText}>Hello, User</Text>
        </View>
        <View style={styles.actionCont}>
          {infoData.map((data) => (
            <ProfileCard title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Orders</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {OrderData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Wishlist</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {WishListData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Account</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {accountData.map((data) => (
            <AccountCard title={data.title} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  actionCont: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  orderCont: {
    marginTop: 15,
    borderBottomColor: "#b8baba",
    borderBottomWidth: 3,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  orderText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
});
