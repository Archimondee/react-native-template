/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TitleHome } from "./TabsIcon/TabsTitle";
import { IconHome } from "./TabsIcon/TabsIcon";
import HomeTab from "./Tabs/HomeTab";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,
          height: 90,
          paddingTop: 5,
          backgroundColor: "white",
          position: "absolute",

          //paddingTop: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleHome focused={focused} />,
          tabBarIcon: ({ focused }) => <IconHome focused={focused} />,
        }}
        // listeners={({ navigation }) => ({
        //   tabPress: e => {
        //     e.preventDefault();

        //     onPressTab(navigation, "Home");
        //   },
        // })}
      />
      <Tab.Screen
        name="Category"
        component={HomeTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleHome focused={focused} />,
          tabBarIcon: ({ focused }) => <IconHome focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
