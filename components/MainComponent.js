import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import LocationInfo from "./LocationInfoComponents";
import { Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackedLocation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Directory"
        component={Directory}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Stack.Screen name="Locations" component={LocationInfo} />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Visit Us" component={StackedLocation} />
        <Tab.Screen name="About Us" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
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
