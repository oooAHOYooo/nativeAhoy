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
    backgroundColor: colors.primary,
  },
  // more global styles...
});
