import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Sound from 'react-native-sound';


const HomeScreen = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songs, setSongs] = useState([]);

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  const likeSong = () => {
    // Code to like the current song
  };

  const addToPlaylistButton = () => {
    // Code to add the current song to the playlist
  };

  const playSong = (artist, title, url) => {
    // Stop the previous song if there is one
    if (song) {
      song.stop();
    }

    // Create a new sound instance
    const newSong = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound: ', error);
        return;
      }

      // Play the sound
      newSong.play((success) => {
        if (!success) {
          console.log('Sound did not play successfully');
          newSong.reset();
        }
      });
    });

    // Update the state
    setSong(newSong);
  };

  useEffect(() => {
    // Fetch songs data here and set it to the state
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CleanOy!</Text>
      <Image source={{ uri: '../assets/u_ahoy23.png' }} style={styles.image} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>Song Title</Text>
        <Text style={styles.songArtist}>Artist Name</Text>
      </View>
      <View style={styles.songControls}>
        <Button title="Prev" onPress={prevSong} />
        <Button title="Play/Pause" onPress={() => {}} />
        <Button title="Next" onPress={nextSong} />
      </View>
      <WebView source={{ uri: 'https://embed.radio.co/player/0024c4d.js' }} />
      {/* Additional content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  songInfo: {
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 14,
  },
  songControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default HomeScreen;