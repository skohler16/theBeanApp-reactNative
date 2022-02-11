import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Card } from "react-native-elements";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title={"The Bean Coffee House"} wrapperStyle={{ margin: 20 }}>
          <Text>Phone: 575-527-5155</Text>
          <Text>Email: thebeanroasters@gmail.com</Text>
        </Card>
        <Card title={"The Bean at Josephina's"} wrapperStyle={{ margin: 20 }}>
          <Text>Phone: 575-555-5555</Text>
          <Text>Email: thebeanjosiXXX@gmail.com</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
