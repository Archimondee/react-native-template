import { useExample } from "hooks/useExample";
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Config from "react-native-config";

const HomeScreen = () => {
  const { character, getExampleCharacter } = useExample();
  useEffect(() => {
    getExampleCharacter(1);
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>From ENV : {Config.STATUS}</Text>
      <Text>Data API Example </Text>
      <Text>
        {character?.name} - {character?.gender} - {character?.location?.name}
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
