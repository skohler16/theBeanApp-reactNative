import React, { Component } from "react";
import { Text } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return <Text>Hello World</Text>;
  }
}

export default Home;
