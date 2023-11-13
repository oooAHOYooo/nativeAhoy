import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/HomeScreenStyles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CleanOy!</Text>
      {/* Additional content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Example background color
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Example text color
  },
  // Add more styling as per cleanOy's theme
});

export default HomeScreen;
