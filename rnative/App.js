import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bananas from "./app/components/bananas";
import Proba from "./app/components/proba";
import BlinkApp from "./app/components/blink";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.tekst}>Hello World!</Text>
          </View>
          <Bananas />
          <Proba />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCFFF4",
    alignItems: "center",
    justifyContent: "center"
  },
  tekst: {
    fontSize: 20,
    color: "steelblue"
  },
  container2: {
    backgroundColor: "powderblue",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 260,
    height: 450
  },
  container3: {
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 20
  }
});
