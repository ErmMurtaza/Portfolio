// src/screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("ProfileScreen"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/dummy_profile.avif")} style={styles.logo} />
      <Text style={styles.title}>Eram Murtaza Portfolio App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
});
