import React from "react";
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeContext";

const Projects = () => {
  const projects = [
    { id: "1", name: "Grammar Heroes"},
    { id: "2", name: "Planet Shaper"},
    { id: "3", name: "Coin Crisis"},
    { id: "4", name: "Byahero App"},
    { id: "5", name: "Lingua Disco Language App"},
  ];
  const { darkMode, setDarkMode } = useTheme();

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      <FlatList
      horizontal
        data={projects}
        renderItem={({ item }) => (
            <Text style={[styles.project, { backgroundColor: darkMode ? "#CBE4F9" : "#D6CDEA" }]}>{item.name}</Text>
            
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: { 
    width: "97%", // Ensure both sections take the same width
    alignSelf: "center", // Centers it within the screen
    marginTop: 20 
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold" },
  project: { 
    backgroundColor: "#ddd", 
    padding: 10, 
    marginHorizontal: 5, // Ensures even spacing for horizontal list
    borderRadius: 15 
  },
  lightText: { color: "black" },
  darkText: { color: "white" },
});


export default Projects;
