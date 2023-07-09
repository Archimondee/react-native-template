import { createRef } from "react";
import { StackActions } from "@react-navigation/core";
import type { RootType, RootStackParamList } from "types/NavigatorTypes";

export const navigationRef = createRef<any>();

const navigate = (
  routeName: RootType,
  params?: RootStackParamList[RootType],
) => {
  navigationRef.current!.navigate(routeName, params);
};

const push = (routeName: RootType, params?: RootStackParamList[RootType]) => {
  const pushAction = StackActions.push(routeName, params);
  navigationRef.current!.dispatch(pushAction);
};

const popToTop = () => {
  navigationRef.current!.dispatch(StackActions.popToTop());
};

const back = () => {
  navigationRef.current!.dispatch(StackActions.pop(1));
};

const backTo = (number: number) => {
  navigationRef.current!.dispatch(StackActions.pop(number));
};

const jump = (routeName: "HomeScreen") => {
  navigationRef.current!.reset({
    key: null,
    index: 0,
    routes: [{ name: routeName }],
  });
};

const navigateMaintenance = () => {
  navigationRef.current!.reset({
    key: null,
    index: 0,
    routes: [{ name: "MaintenanceScreen" }],
  });
};

const navigateResetHome = () => {
  navigationRef.current!.reset({
    key: null,
    index: 0,
    routes: [{ name: "TabNavigator" }],
  });
};

const reset = () => {
  navigationRef.current!.reset({
    index: 0,
    routes: [{ name: "MainNavigator" }],
  });
};

const replace = (
  routeName: RootType,
  params?: RootStackParamList[RootType],
) => {
  navigationRef.current!.dispatch(StackActions.replace(routeName, params));
};

export default {
  navigate,
  push,
  back,
  backTo,
  replace,
  reset,
  popToTop,
  jump,
  navigateMaintenance,
  navigateResetHome,
};
