import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Data
import { SUB_CATEGORIES, PRODUCTS } from '../data/dummy-data';

// Components

import ProductItem from '../components/shop/ProductItem';

const HomeScreen = ({ route }) => {
  const renderItem_2 = (itemData_2) => {
    return (
      <ProductItem name={itemData_2.item.name} price={itemData_2.item.price} />
    );
  };

  const renderItem_1 = (itemData) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.header}>{itemData.item.name}</Text>
        <View style={{ marginTop: 5 }}>
          <FlatList
            data={PRODUCTS.filter((item) => {
              if (item.ID_subCategory === itemData.item.ID) {
                return true;
              }
            })}
            renderItem={renderItem_2}
            keyExtractor={(item) => item.ID}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SUB_CATEGORIES.filter((item) => {
          if (item.ID_mainCategory === route.params.selectedCategory) {
            return true;
          }
        })}
        renderItem={renderItem_1}
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
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
