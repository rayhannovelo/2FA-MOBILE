import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function dimensionHelper() {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Text>W: {width}px</Text>
      <Text>H: {height}px</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 75,
    height: 75,
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
