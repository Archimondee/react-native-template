import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { enableScreens } from "react-native-screens";
import AppNavigator from "navigations/AppNavigator";

const App = () => {
  enableScreens(true);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

    // if (Config.STATUS === "PRODUCTION") {
    //   GlobalDebug(false, true);
    // }
  }, []);
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <AppNavigator />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
};

export default App;
