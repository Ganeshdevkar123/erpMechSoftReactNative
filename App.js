import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';

import Router from "./src/navigation/Router";
import Header from "./src/components/Header";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Open a connection to the SQLite database
    SQLite.openDatabase(
      {
        name: "products.db",
        location: "default",
      },
      () => {
        console.log("Database opened successfully.");
      },
      (error) => {
        console.error("Failed to open database:", error);
      }
    );
  }, []);

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
