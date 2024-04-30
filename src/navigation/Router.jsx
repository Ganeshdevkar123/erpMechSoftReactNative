import { StyleSheet, Text, View } from "react-native";
// import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Category from "../components/Category";
import Brands from "../components/Brands";
import Carousel from "../components/Carousel";
import Deals from "../components/Deals";
import Service from "../components/Services";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Brands" component={Brands} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="Services" component={Service} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
