import React from "react";
import { View, Text, Image, Switch, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <View style={styles.header}>
      {/* Wrapper to move everything downward */}
      <View style={styles.wrapper}>
        {/* Profile Picture (Above the Box) */}
        <Image source={require("../assets/profile.png")} style={styles.profilePic} />

        {/* Background Container for Text */}
        <View style={[styles.textContainer, darkMode ? styles.darkBox : styles.lightBox]}>
          <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Neil Patrick B. Llanto</Text>
          <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>
            React Native Developer | Passionate Coder
          </Text>
          <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>
            I really like drafting concepts of possible games to make. {"\n"}
            My favorite food and dessert of all time is ice cream. Favorite album is folklore. {"\n"}
          </Text>
        </View>
      </View>

      {/* Dark Mode Toggle with More Space */}
      <View style={{ marginTop: 20 }}>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { alignItems: "center", marginBottom: 20 },

  // Wrapper with margin at the top to shift everything down
  wrapper: { 
    alignItems: "center", 
    position: "relative", 
    width: "100%", 
    marginTop: 50, // Adds space at the top
  },

  // Profile Picture Styling
  profilePic: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    position: "absolute", 
    top: -40, // Adjusted to move slightly down
    zIndex: 2, // Ensures it stays above the box
  },

  // Text Container (Box)
  textContainer: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50, // Space for profile picture
    zIndex: 1, // Lower than profile pic
  },

  // Light Mode Box
  lightBox: { backgroundColor: "rgba(255, 255, 255, 0.7)" },

  // Dark Mode Box
  darkBox: { backgroundColor: "rgba(11, 11, 69, 0.7)" },

  // Text Styling
  name: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 16, marginBottom: 10, textAlign: "center" },
  lightText: { color: "black" },
  darkText: { color: "white" },
});

export default Header;
