import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Directory(props) {
  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.address}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("../shared/images/beansClose.jpeg") }}
      />
    );
  };

  return (
    <FlatList
      data={props.locations}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Directory;
