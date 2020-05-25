import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const totalSum = useSelector((state) => state.cart.totalSum);

  return (
    <View style={styles.container}>
      <Text>Total Cart Price: {totalSum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
