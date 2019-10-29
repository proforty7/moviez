import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import MHeader from "./components/MHeader";

export default function App() {
  const theme = {
    Header: {
      backgroundColor: "#c0392b"
    }
  };

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <MHeader />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  }
});
