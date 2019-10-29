import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "react-native-elements";
import MHeader from "./components/MHeader";
import Body from "./components/Body";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

export default function App() {
  const theme = {
    Header: {
      backgroundColor: "#c0392b"
    }
  };

  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ThemeProvider theme={theme}>
          <MHeader />
          <Body />
        </ThemeProvider>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d3436"
  }
});
