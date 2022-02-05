import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import LocationInfo from "./LocationInfoComponents";
import { Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function StackedLocation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Directory" component={Directory} />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Locations" component={StackedLocation} />
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
