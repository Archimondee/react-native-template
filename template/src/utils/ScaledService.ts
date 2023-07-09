/* eslint-disable @typescript-eslint/no-shadow */
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const BASE_WIDTH = 1024;
const BASE_HEIGHT = 720;
const DEVICE_WIDTH = width > height ? width : height;
const DEVICE_HEIGHT = width < height ? width : height;
const scaledHorizontal = (width: number) => {
  return (width * DEVICE_WIDTH) / BASE_WIDTH;
};

const scaledVertical = (height: number) => {
  return (height * DEVICE_HEIGHT) / BASE_HEIGHT;
};

const scaledFontSize = (size: number) => {
  const fontSize = Math.round((size * DEVICE_HEIGHT) / BASE_HEIGHT);
  return DEVICE_WIDTH < BASE_WIDTH ? fontSize + 1 : fontSize;
};

const widthPercentage = (percent: number) =>
  (percent / 100) * Dimensions.get("window").width;

const heightPercentage = (percent: number) =>
  (percent / 100) * Dimensions.get("window").height;

export {
  scaledHorizontal,
  scaledVertical,
  scaledFontSize,
  widthPercentage,
  heightPercentage,
};
