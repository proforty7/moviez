import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "react-native-elements";
import MHeader from "./components/MHeader";
import Body from "./components/Body";

export default function App() {
  const theme = {
    Header: {
      backgroundColor: "#c0392b"
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={theme}>
        <MHeader />
        <Body />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d3436"
  }
});
