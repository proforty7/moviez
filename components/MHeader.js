import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";

export class MHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={{
          text: "Moviez",
          style: { fontSize: 20, color: "#fff" }
        }}
      />
    );
  }
}

export default MHeader;
