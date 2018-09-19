import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

class RNHighScores extends React.Component {
  render() {
    var contents = this.props["scores"].map(score => (
      // <Text key={score.name}>
      //   {score.name}:{score.value}
      //   {"\n"}
      // </Text>
      <Text> 这是一个富文本{"\n"} sad </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>我是头部</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  scores: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("RNHighScores", () => RNHighScores);