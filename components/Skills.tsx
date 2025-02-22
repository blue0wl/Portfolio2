import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeContext";

const Skills = () => {
  const skills = ["React", "Node.js", "React Native", "Game Designer", "Sketching and Painting", "Crocheting", "Cooking"];
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
      <FlatList
        horizontal
        data={skills}
        renderItem={({ item }) => <Text style={[styles.skill, { backgroundColor: darkMode ? "#ACE7F8" : "#afeee4" }]}>{item}</Text>}
        keyExtractor={(item) => item}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  section: { 
    width: "97%", // Aligns with Projects and Contacts
    alignSelf: "center", // Centers the section
    marginTop: 20 
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold" },
  skill: { 
    backgroundColor: "#ddd", 
    padding: 10, 
    marginHorizontal: 5, // Ensures even spacing for horizontal list
    borderRadius: 10 
  },
  lightText: { color: "black" },
  darkText: { color: "white" },
});


export default Skills;
