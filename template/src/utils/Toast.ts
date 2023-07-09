import type { StyleProp, ViewStyle } from "react-native";
import Toast from "react-native-root-toast";

const OpenToast = ({
  message,
  duration,
  position,
  onHide,
  onShow,
  containerStyle,
  textColor,
  backgroundColor,
  shadowColor,
}: {
  message: string;
  duration?: number;
  position?: number;
  onShow?: () => void;
  onHide?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textColor?: string;
  backgroundColor?: string;
  shadowColor?: string;
}) => {
  Toast.show(message, {
    duration: duration || Toast.durations.LONG,
    position: position || Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: onShow,
    onHide: onHide,
    textColor: textColor,
    backgroundColor: backgroundColor,
    shadowColor: shadowColor,
    containerStyle: [containerStyle, { marginBottom: 100 }],
  });
};

const CloseToast = () => {
  Toast.hide(true);
};

export { OpenToast, CloseToast };
