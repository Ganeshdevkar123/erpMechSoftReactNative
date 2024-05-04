import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "../screens/Profile";
import Menu from "../screens/Menu";
import Cart from "../screens/Cart";

const Router = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        initialRouteName="Stack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "Cart") {
              iconName = focused ? "amazon" : "amazon";
            } else if (route.name === "Menu") {
              iconName = focused ? "bars" : "bars";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "skyblue", // Color of the active tab
          inactiveTintColor: "darkgray", // Color of the inactive tabs
          labelStyle: {
            fontSize: 10, // Font size of the tab labels
            marginTop: 0, // Adjust the space between the icon and label
          },
          tabStyle: {
            padding: 5, // Padding at the top of each tab
            borderBottomWidth: 1, // Border on top of the tab bar
            borderBottomColor: "lightgray", // Border color
          },
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false, // Hide the header for ProfileScreen
          }}
          name="Home"
          component={StackNavigator}
        ></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false, // Hide the header for ProfileScreen
          }}
          name="Profile"
          component={Profile}
        ></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false, // Hide the header for ProfileScreen
          }}
          name="Cart"
          component={Cart}
        ></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false, // Hide the header for ProfileScreen
          }}
          name="Menu"
          component={Menu}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }

  const StackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header globally for all screens within the tab navigator
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        ></Stack.Screen>
        <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
