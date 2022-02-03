import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderLocation({ location }) {
  if (location) {
    return (
      <Card
        featuredTitle={location.name}
        image={require("../shared/images/beansClose.jpeg")}
      >
        <Text style={{ margin: 10 }}>{location.phone}</Text>
        <Text style={{ margin: 10 }}>{location.description}</Text>
        <Text style={{ margin: 10 }}>{location.hours}</Text>
        <Text style={{ margin: 10 }}>{location.address}</Text>
      </Card>
    );
  }
  return <View />;
}

function LocationInfo(props) {
  return <RenderLocation location={props.location} />;
}

export default LocationInfo;
