import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3237/3237472.png' }} // You can replace this with the actual image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Crust</Text>
        <Text style={styles.profileEmail}>crustcrop99@gmail.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* General Section */}
      <View style={styles.section}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Security</Text>
          <Text style={styles.optionSubText}>FaceID</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>iCloud Sync</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#0e6eff' }}
            thumbColor={isEnabled ? '#0e6eff' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      {/* My Subscriptions Section */}
      <View style={styles.section}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Sorting</Text>
          <Text style={styles.optionSubText}>Date</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Summary</Text>
          <Text style={styles.optionSubText}>Average</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Default Currency</Text>
          <Text style={styles.optionSubText}>USD ($)</Text>
        </View>
      </View>

      {/* Appearance Section */}
      <View style={styles.section}>
        <View style={styles.option}>
          <Text style={styles.optionText}>App Icon</Text>
          <Text style={styles.optionSubText}>Default</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Theme</Text>
          <Text style={styles.optionSubText}>Dark</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Dark background
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    color: '#a5a5a5',
    marginBottom: 10,
  },
  editProfileButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: '#0e6eff', // Blue color for buttons
    borderRadius: 20,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#1e2638', // Darker section background
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },
  optionSubText: {
    fontSize: 14,
    color: '#a5a5a5',
  },
});
