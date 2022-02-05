import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { LOCATIONS } from "../shared/locations";
import MapView from "react-native-maps";

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
        <MapView />
      </Card>
    );
  }
  return <View />;
}

class LocationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: LOCATIONS,
    };
  }
  static navigationOptions = {
    title: "Location Information",
  };
  render() {
    const locationId = this.props.navigation.getParam("locationId");
    const location = this.state.locations.filter(
      (location) => location.id === locationId
    )[0];
    return <RenderLocation location={location} />;
  }
}

export default LocationInfo;
