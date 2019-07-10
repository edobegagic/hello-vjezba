import React, { Component } from "react";
import { AppRegistry, Image } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/13/1459336434-joker-batman-killing-joke.jpg"
    };

    return (
      <Image
        source={pic}
        style={{ width: 230, height: 230, borderRadius: 15 }}
      />
    );
  }
}
