import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import LocationInfo from "./LocationInfoComponents";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Constants from "expo-constants";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createAppContainer } from "react-navigation";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    LocationInfo: { screen: LocationInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#331810",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

// const Tab = createMaterialBottomTabNavigator();

// function BottomTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Locations" component={LocationInfo} />
//     </Tab.Navigator>
//   );
// }
class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
