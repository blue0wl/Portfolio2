import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contact Me</Text>
      <View style={[styles.socialItem, darkMode ? styles.darkBox : styles.lightBox]}>
      <Text style={[darkMode ? styles.darkText : styles.lightText]}>Email: llanto.neilpatrick15@gmail.com</Text>
      </View>
      

      {/* Individual Social Media Containers */}
      <View style={[styles.socialItem, darkMode ? styles.darkBox : styles.lightBox]}>
        <Text 
          onPress={() => Linking.openURL("https://bit.ly/3D4mOLF")} 
          style={[styles.link, darkMode ? styles.darkText : styles.lightText]}
        >
          LinkedIn
        </Text>
      </View>

      <View style={[styles.socialItem, darkMode ? styles.darkBox : styles.lightBox]}>
        <Text 
          onPress={() => Linking.openURL("https://github.com/dashboard")} 
          style={[styles.link, darkMode ? styles.darkText : styles.lightText]}
        >
          GitHub
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { width: "100%", marginTop: 20, paddingLeft: 20 }, // Left-aligned section
  sectionTitle: { fontSize: 20, fontWeight: "bold" },

  // Individual Social Media Container
  socialItem: {
    paddingHorizontal: 10, // Prevents box from expanding
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 5, // Space between links
    alignSelf: "flex-start", // Aligns to the left without stretching
  },

  // Light and Dark Mode Box Styles
  lightBox: { backgroundColor: "rgba(255, 255, 255, 0.7)" },
  darkBox: { backgroundColor: "rgba(11, 11, 69, 0.7)" },

  lightText: { color: "black" },
  darkText: { color: "white" },

  link: { 
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Contact;


