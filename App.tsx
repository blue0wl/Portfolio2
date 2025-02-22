import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Header from "./components/ProfileHeader";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { darkMode } = useTheme();

  // Set background image based on theme
  const backgroundImage = darkMode
    ? require("./assets/darkmode.jpg")
    : require("./assets/lightmode1.jpg");

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={[styles.container, darkMode ? styles.dark : styles.light]}>
        <StatusBar style={darkMode ? "light" : "dark"} />
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "transparent", // Ensure transparency so background shows
  },
  light: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
  dark: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
});

