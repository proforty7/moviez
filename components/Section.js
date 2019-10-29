import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { Card } from "react-native-elements";

export default Section = ({ list, title }) => {
  // console.log(list);
  return (
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
  );
};

const styles = StyleSheet.create({
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
