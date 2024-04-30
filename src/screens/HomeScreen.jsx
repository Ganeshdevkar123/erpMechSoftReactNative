import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} style={styles.header} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SubHeader navigation={navigation} />
        <Category navigation={navigation} />
        <Carousel navigation={navigation} />
        <Services navigation={navigation} />
        <Deals navigation={navigation} />
        <Brands navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 25,
  },
  header:{
    position:'absolute',
    top:0
  }
});
