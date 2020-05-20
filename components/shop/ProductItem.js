import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Shop components
import PickerButton from '../shop/PickerButton';

const ProductItem = (props) => {
  const { productData } = props;

  const [isProductSelected, setIsProductSelected] = useState(false);

  const [isSmallSizeSelected, setIsSmallSizeSelected] = useState(false);
  const [isMediumSizeSelected, setIsMediumSizeSelected] = useState(false);
  const [isLargeSizeSelected, setIsLargeSizeSelected] = useState(false);

  const changeProductSelectedState = (value) => {
    setIsProductSelected(!value);
  };

  const smallSizeHandler = (value) => {
    setIsSmallSizeSelected(!value);
  };
  const mediumSizeHandler = (value) => {
    setIsMediumSizeSelected(!value);
  };
  const largeSizeHandler = (value) => {
    setIsLargeSizeSelected(!value);
  };

  let gridCounter = 0;
  if (productData.isSmallSize == true) { gridCounter += 1; }
  if (productData.isMediumSize == true) { gridCounter += 1; }
  if (productData.isLargeSize == true) { gridCounter += 1; }

  const GridWithPickerButtons = () => {
    if (gridCounter == 3) {
      return (
        <View style={styles.buttonsContainer}>
          <PickerButton
            stylesContainer={{ width: 90 }}
            stylesBadge={{ left: 37 }}
            size={productData.smallSizeName}
            price={productData.smallSizePrice}
            variable={isSmallSizeSelected}
            function={smallSizeHandler} />
          <PickerButton
            stylesContainer={{ width: 90 }}
            stylesBadge={{ left: 37 }}
            size={productData.mediumSizeName}
            price={productData.mediumSizePrice}
            variable={isMediumSizeSelected}
            function={mediumSizeHandler} />
          <PickerButton
            stylesContainer={{ width: 90 }}
            stylesBadge={{ left: 37 }}
            size={productData.largeSizeName}
            price={productData.largeSizePrice}
            variable={isLargeSizeSelected}
            function={largeSizeHandler} />
        </View>
      )
    }
    else if (gridCounter == 2) {
      return (
        <View style={[styles.buttonsContainer, { justifyContent: 'space-around' }]}>
          <PickerButton
            stylesContainer={{ width: 130 }}
            stylesBadge={{ left: 55 }}
            size={productData.mediumSizeName}
            price={productData.mediumSizePrice}
            variable={isMediumSizeSelected}
            function={mediumSizeHandler} />
          <PickerButton
            stylesContainer={{ width: 130 }}
            stylesBadge={{ left: 55 }}
            size={productData.largeSizeName}
            price={productData.largeSizePrice}
            variable={isLargeSizeSelected}
            function={largeSizeHandler} />
        </View>
      )
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleView}>
          <Text style={styles.headerText} numberOfLines={1}>{productData.name}</Text>
        </View>
        <View style={styles.headerPriceView}>
          {(isProductSelected == true && gridCounter > 1) ? (
            <View style={{ marginRight: 5 }}>
              <Button
                title="cancel"
                color="red"
                onPress={() => setIsProductSelected(false)}
              />
            </View>
          ) : (
              <View></View>
            )}
          <View style={{ width: '55%' }}>
            <Button
              title={isProductSelected == true ? (gridCounter > 1 ? 'Submit' : 'Added') : 'To Cart'}
              color="green"
              disabled={
                (isProductSelected == true ? true : false) &&
                ((isSmallSizeSelected ||
                  isMediumSizeSelected ||
                  isLargeSizeSelected) == true
                  ? false
                  : true)
              }
              onPress={() => {
                changeProductSelectedState(isProductSelected);
                setIsSmallSizeSelected(false);
                setIsMediumSizeSelected(false);
                setIsLargeSizeSelected(false);
              }}
            />
          </View>
        </View>
      </View>
      {(isProductSelected == true && gridCounter > 1) ? <GridWithPickerButtons /> : null}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
  },
  headerContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerPriceView: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  headerText: {
    color: '#777',
    fontSize: 16,
  },
  buttonsContainer: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductItem;
