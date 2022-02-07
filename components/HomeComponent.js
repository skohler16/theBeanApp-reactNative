import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { BLENDS } from "../shared/coffeeBlends";
import { LATTES } from "../shared/featuredLattes";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card
        title={item.name}
        image={require("../shared/images/barsOfSoapBag.jpeg")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blends: BLENDS,
      lattes: LATTES,
    };
  }

  render() {
    return (
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Welcome to the Bean Cafe!
        </Text>
        <RenderItem
          item={this.state.lattes.filter((latte) => latte.featured)[0]}
        />
        <RenderItem
          item={this.state.blends.filter((blend) => blend.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;
