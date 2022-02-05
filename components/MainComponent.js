import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import LocationInfo from "./LocationInfoComponents";
import { Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Locations" component={Directory} onPress={} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <BottomTabs />
      </View>
    );
  }
}

export default Main;
