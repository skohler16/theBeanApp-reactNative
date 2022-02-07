import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native";

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Hello About</Text>
        </View>
      </ScrollView>
    );
  }
}

export default About;
