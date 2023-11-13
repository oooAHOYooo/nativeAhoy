import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {/* Profile content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Style similar to HomeScreen or specific to ProfileScreen
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    // Text styling
  },
});

export default ProfileScreen;
