import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Section from "./Section";
import { useSelector } from "react-redux";

const Body = () => {
  // const [loading, setLoading] = useState(true);
  const searchText = useSelector(state => state.search);
  console.log(searchText);

  return (
    <ScrollView style={styles.container}>
      <Section category="now_playing" title="Now Playing" />
      <Section category="popular" title="Popular" />
      <Section category="top_rated" title="Top Rated" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Body;
