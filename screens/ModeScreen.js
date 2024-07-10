import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ModeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.modeText}>Mode: {isEnabled ? 'ON' : 'OFF'}</Text>
      
      {/* Toggle Switch */}
      <Switch
        trackColor={{ false: "#767577", true: "#5EDA90" }}
        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
  modeText: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ModeScreen;
