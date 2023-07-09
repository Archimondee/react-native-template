import React from "react";
import type { StackNavigationOptions } from "@react-navigation/stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import type { RootStackParamList } from "types/NavigatorTypes";
import { View } from "react-native";
import HomeScreen from "screens/HomeScreen/HomeScreen";

import TabNavigator from "./TabNavigator";

const Main = createStackNavigator<RootStackParamList>();
const options: StackNavigationOptions = {
  headerTintColor: "#65b6e5",
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTitleStyle: {
    //fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 14,
    color: "#4a4a4a",
  },
  // headerStyle: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,

  //   elevation: 6,
  // },
  // headerLeft: () => (
  //   <TouchableOpacity
  //     onPress={NavigationService.back}
  //     style={{
  //       paddingVertical: scaledVertical(15),
  //       paddingRight: scaledHorizontal(20),
  //     }}>
  //     <Image
  //       source={icon.backIcon}
  //       style={{
  //         height: scaledVertical(36),
  //         width: scaledHorizontal(36),
  //         marginLeft: scaledHorizontal(10),
  //       }}
  //     />
  //   </TouchableOpacity>
  // ),
  // headerBackImage: () => (

  // ),
  //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

// const halfModalBottomOptions: StackNavigationOptions = {
//   cardStyle: { backgroundColor: "transparent" },
//   presentation: "transparentModal",
//   headerShown: false,
//   cardOverlayEnabled: true,
//   cardStyleInterpolator: ({ current: { progress } }) => ({
//     cardStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 0.75, 1],
//         outputRange: [0, 0.5, 1],
//       }),
//     },
//     overlayStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 0.5],
//         extrapolate: "clamp",
//       }),
//     },
//   }),
// };

const MainNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Main.Navigator screenOptions={options}>
        <Main.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        {/* Tab Navigator */}
        <Main.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </Main.Navigator>
    </View>
  );
};

export default MainNavigator;
