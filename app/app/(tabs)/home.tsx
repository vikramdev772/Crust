import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import homebg from "../../assets/images/home.png"


export default function HomeScreen() {
  return (
    <ImageBackground
      source={homebg} // Replace with your image URL
      style={styles.background}
    >
      <Animated.View style={styles.container} entering={FadeIn.duration(2000)}>
        <Text style={styles.heading}>Welcome to Crust Corporation</Text>
        <Text style={styles.subheading}>
          Your trusted partner for comprehensive financial services.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find out how!</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
