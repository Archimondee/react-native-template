import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { enableScreens } from "react-native-screens";
import AppNavigator from "navigations/AppNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "stores";
import { PersistGate } from "redux-persist/integration/react";
import Config from "react-native-config";
import { GlobalDebug } from "utils/GlobalDebug";

const App = () => {
  enableScreens(true);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

    if (Config.STATUS === "PRODUCTION") {
      GlobalDebug(false, true);
    }
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootSiblingParent>
            <AppNavigator />
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
