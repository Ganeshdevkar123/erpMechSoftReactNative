import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Router from "./src/navigation/Router";
import Header from "./src/components/Header";


export default function App() {

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
