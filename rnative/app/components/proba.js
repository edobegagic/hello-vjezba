import React, { Component } from "react";
import { StyleSheet, AppRegistry, Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text style={styles.prva}>Hello {this.props.name}</Text>
        <Text style={styles.druga}>Ovo je još neki tekst</Text>
      </View>
    );
  }
}

export default class Proba extends Component {
  render() {
    return (
      <View>
        <Greeting name="Edo" />
        <Greeting name="Batman" />
        <Greeting name="BLABLABLA" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  prva: {
    color: "lightcoral",
    fontFamily: "monospace",
    fontSize: 25,
    fontWeight: "bold"
  },
  druga: {
    color: "#66B4FF",
    fontSize: 12,
    paddingLeft: 25,
    fontWeight: "bold"
  }
});
