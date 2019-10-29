import React, { Component, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Card } from "react-native-elements";
import api from "../api";
import { API_KEY } from "../config/keys";

export default Section = ({ category, title }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/movie/${category}`, {
          params: { api_key: API_KEY }
        });
        const data = res.data.results.map(item => {
          return {
            title: item.title,
            vote_average: item.vote_average,
            backdrop_path: item.backdrop_path
          };
        });
        setList(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={styles.heading}>{title}</Text>
          <FlatList
            horizontal
            data={list}
            renderItem={movie => {
              return (
                <Card
                  image={{
                    uri: `https://image.tmdb.org/t/p/w300/${movie.item.backdrop_path}`
                  }}
                  featuredTitle={movie.item.title}
                  featuredSubtitle={movie.item.vote_average.toString()}
                  imageStyle={styles.image}
                  imageProps={{ resizeMode: "cover" }}
                  featuredTitleStyle={styles.title}
                  featuredSubtitleStyle={styles.subtitle}
                  containerStyle={styles.card}
                  imageWrapperStyle={{ borderRadius: 5 }}
                />
              );
            }}
            keyExtractor={(item, i) => `${i}`}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 15,
    marginLeft: 20
  },
  image: {
    height: 160,
    width: null
  },
  card: {
    height: 162,
    width: 200,
    padding: 0,
    borderRadius: 25,
    overflow: "hidden"
  },
  title: {
    alignSelf: "center",
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10
  },
  subtitle: {
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    color: "#ffeaa7"
    // marginTop: 50,
    // marginRight: 20
  }
});
