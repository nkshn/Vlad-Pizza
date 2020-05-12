import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Data
import { MAIN_CATEGORIES } from '../data/dummy-data';

const HomeScreen = ({ route, navigation }) => {
  const renderItem = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          console.log('Log 1');
          navigation.navigate('CategoryProducts', {
            screenName: itemData.item.name,
            selectedCategory: itemData.item.ID,
          });
        }}
      >
        <View style={styles.itemView}>
          <Text style={styles.itemTitle}>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        data={MAIN_CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  itemView: {
    width: '100%',
    height: 100,
    backgroundColor: '#667d47',
    marginBottom: 30,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
});

export default HomeScreen;
