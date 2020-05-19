import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ActivatedTopBadge = () => {
  return (
    <View style={styles.activeBadgeContainer}>
      <View style={styles.activeBadgeIconView}>
        <Ionicons
          name={Platform.OS == 'android' ? 'md-checkmark' : 'ios-checkmark'}
          size={15}
          color="white"
        ></Ionicons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeBadgeContainer: {
    zIndex: 10,
    width: 20,
    height: 20,
    bottom: 76,
    left: 40,
    borderColor: 'red',
    borderWidth: 0.7,
    borderRadius: 20,
    backgroundColor: 'red',
    position: 'absolute',
  },
  activeBadgeIconView: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: 1.5,
  },
});

export default ActivatedTopBadge;
