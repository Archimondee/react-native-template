import { Platform, StyleSheet } from "react-native";

const styles = (focused?: boolean) =>
  StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      resizeMode: "contain",
      //color: focused ? '#F2994A' : 'white',
      tintColor: focused ? "blue" : "yellow",
    },
    title: {
      textAlign: "center",
      fontSize: 12,

      color: focused ? "blue" : "yellow",
      marginBottom: Platform.OS === "android" ? 15 : 5,
      // borderTopWidth: 1,
      // borderTopColor: "red",
    },
    // borderStyle: {
    //   borderBottomWidth: focused ? 2 : 0,
    //   //borderBottomColor: colors.secondary500,
    //   width: "100%",
    // },
  });

export default styles;
