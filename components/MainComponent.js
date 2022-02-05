import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import LocationInfo from "./LocationInfoComponents";
import { createStackNavigator } from "react-navigation-stack";
import { Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackedLocation() {
  <Drawer.Navigator>
    <Drawer.Screen name="Directory" component={Directory} />
    <Stack.Screen name="Locations" component={LocationInfo} />
  </Drawer.Navigator>;
}
function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stacked" component={StackedLocation} />
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
