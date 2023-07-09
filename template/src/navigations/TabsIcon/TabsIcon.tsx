import React, { PureComponent } from "react";
import { Image } from "react-native";
import icons from "configs/icons";

import styles from "./TabsStyles";

interface Props {
  focused: boolean;
}

export class IconHome extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <Image
        source={icons.home}
        style={[styles(focused).icon, { height: 35, width: 35 }]}
      />
    );
  }
}
