import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import styles from "./TabsStyles";

interface Props {
  focused: boolean;
}

export class TitleHome extends PureComponent<Props> {
  render() {
    const { focused } = this.props;

    return (
      <View>
        <Text style={styles(focused).title}>Home</Text>
      </View>
    );
  }
}
