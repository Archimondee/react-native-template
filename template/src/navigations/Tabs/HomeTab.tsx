import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen/HomeScreen";

const Home = createStackNavigator();

const HomeTab = () => {
  return (
    <Home.Navigator>
      <Home.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Home.Navigator>
  );
};

export default HomeTab;
