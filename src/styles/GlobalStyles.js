import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#00f2ff',
  secondary: 'rgba(0, 0, 0, 0.73)',
  // more colors...
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
    borderRadius: 10, // rounded corners
    // shadow properties for the frosted glass effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // more global styles...
});