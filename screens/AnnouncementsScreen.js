// screens/AnnouncementsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnnouncementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>No Announcements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default AnnouncementsScreen;
