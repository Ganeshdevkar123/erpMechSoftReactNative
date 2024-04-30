import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header navigation={navigation}/>
      <SubHeader navigation={navigation}/>
      <Category navigation={navigation}/>
      <Carousel navigation={navigation}/>
      <Services navigation={navigation}/>
      <Deals navigation={navigation}/>
      <Brands navigation={navigation}/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 25,
  },
});
