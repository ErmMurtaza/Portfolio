import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Background = ({ children, color, barcolor }) => (
  <SafeAreaView
    style={[styles.containers, { backgroundColor: color }]}
    edges={["top", "left", "right", "bottom"]}
  >
    <StatusBar barStyle={barcolor} backgroundColor={color} translucent={false} />
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
});

export default Background;
