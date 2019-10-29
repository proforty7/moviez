import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Section from "./Section";

const Body = () => {
  // const [loading, setLoading] = useState(true);

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
