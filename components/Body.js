import React, { Component, useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import api from "../api";
import { API_KEY } from "../config/keys";

const Body = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/movie/popular", {
          params: { api_key: API_KEY }
        });
        const data = res.data.results.map(item => {
          return {
            title: item.title,
            vote_average: item.vote_average,
            backdrop_path: item.backdrop_path
          };
        });
        console.log(data.length);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#c0392b" />
      ) : (
        <Text>ok</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Body;
