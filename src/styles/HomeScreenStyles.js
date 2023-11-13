import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 14, 19)', // --background-color
    color: '#00f2ff', // --text-color
    paddingBottom: '20.5%', // Adjust according to layout
  },
  button: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#00f2ff', // --text-color
    borderColor: '#00e5ff', // --border-color
    borderRadius: 5,
    backgroundColor: 'rgb(0, 14, 19)', // --background-color
  },
  artistInfoLink: {
    color: '#00f2ff', // --text-color
  },
  artistInfoStrong: {
    fontSize: 20, // Adjusted from 1.45rem
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.73)', // --secondary-color
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  bottomNavLink: {
    color: '#00f2ff', // --text-color
  },
  // ...other styles
});
