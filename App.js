import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./src/navigation/Router";

export default function App() {
  const Stack = createNativeStackNavigator();

  return <Router />;
}

const styles = StyleSheet.create({
  container: {},
});
