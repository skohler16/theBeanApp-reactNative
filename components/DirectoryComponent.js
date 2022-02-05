import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { LOCATIONS } from "../shared/locations";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: LOCATIONS,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.address}
          onPress={() => navigate("LocationInfo", { locationId: item.id })}
          leftAvatar={{ source: require("../shared/images/beansClose.jpeg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.locations}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}
export default Directory;
