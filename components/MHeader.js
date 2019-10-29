import React, { Component, useState } from "react";
import { Text, View, StatusBar } from "react-native";
import { Header, SearchBar, Icon } from "react-native-elements";

export default MHeader = () => {
  const [search, setSearch] = useState(false);

  const onSearchClick = () => {
    setSearch(true);
  };

  const onCancelClick = () => {
    setSearch(false);
  };

  return (
    <View>
      {search ? (
        <View style={{ marginTop: StatusBar.currentHeight }}>
          <SearchBar
            placeholder="Type here..."
            onCancel={onCancelClick}
            onClear={onCancelClick}
          />
        </View>
      ) : (
        <Header
          leftComponent={{
            text: "Moviez",
            style: { fontSize: 20, color: "#fff" }
          }}
          rightComponent={{
            icon: "search",
            type: "font-awesome",
            color: "#fff",
            onPress: onSearchClick
          }}
        />
      )}
    </View>
  );
};
