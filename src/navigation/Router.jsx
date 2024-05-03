import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Main from "../components/Main";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          //  header: () => <Header />
        }}
      >
        <Stack.Screen
          options={{
            header: () => <Header />, // Use the CommonComponent as the header
          }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{
            header: () => <Header />, // Use the CommonComponent as the header
          }}
          name="Home"
          component={HomeScreen}
        />
        {/* <Stack.Screen name="Brands" component={Brands} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="Services" component={Service} /> */}
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
