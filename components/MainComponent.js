import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import LocationInfo from "./LocationInfoComponents";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Constants from "expo-constants";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "@react-navigation/native";

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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
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

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
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

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
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

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    AboutNavigator: { screen: AboutNavigator },
    ContactNavigator: { screen: ContactNavigator },
  },
  {
    drawerBackgroundColor: "#B29779",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

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
