import React, { Component, useState } from "react";
import { Text, View, StatusBar } from "react-native";
import { Header, SearchBar, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../actions";

export default MHeader = () => {
  const [search, setShowSearch] = useState(false);
  const value = useSelector(state => state.search);

  const dispatch = useDispatch();

  const onSearchClick = () => {
    setShowSearch(true);
  };

  const onCancelClick = () => {
    setShowSearch(false);
  };

  const onChangeInput = value => {
    dispatch(setSearch(value));
  };

  return (
    <View>
      {search ? (
        <View style={{ marginTop: StatusBar.currentHeight }}>
          <SearchBar
            placeholder="Type here..."
            onChangeText={onChangeInput}
            onCancel={onCancelClick}
            onClear={onCancelClick}
            value={value}
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
