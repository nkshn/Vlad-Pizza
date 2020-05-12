import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ProductItem = (props) => {
  const [isProductSelected, setIsProductSelected] = useState(false);

  const [isSmallSizeSelected, setIsSmallSizeSelected] = useState(false);
  const [isMediumSizeSelected, setIsMediumSizeSelected] = useState(false);
  const [isLargeSizeSelected, setIsLargeSizeSelected] = useState(false);

  const changeProductVariable = (value) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleView}>
          <Text style={styles.headerText}>{props.name}</Text>
        </View>
        <View style={styles.headerPriceView}>
          {isProductSelected == true ? (
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
              title={isProductSelected == true ? 'Submit' : 'To Cart'}
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
                changeProductVariable(isProductSelected);
                setIsSmallSizeSelected(false);
                setIsMediumSizeSelected(false);
                setIsLargeSizeSelected(false);
              }}
            />
          </View>
        </View>
      </View>
      {isProductSelected == true ? (
        <View style={styles.buttonsContainer}>
          <View>
            {isSmallSizeSelected == true ? (
              <ActivatedTopBadge />
            ) : (
              <View></View>
            )}
            <View
              style={{
                overflow: 'hidden',
                borderRadius: 7,
              }}
            >
              <TouchableNativeFeedback
                onPress={() => smallSizeHandler(isSmallSizeSelected)}
              >
                <View
                  style={[
                    styles.buttonsBox,
                    isSmallSizeSelected == true ? styles.activeButtonBox : '',
                  ]}
                >
                  <View style={styles.buttonsTextContainer}>
                    <Text
                      style={[
                        styles.buttonsText,
                        isSmallSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      25см (1000г.)
                    </Text>
                    <Ionicons
                      name={Platform.OS == 'android' ? 'md-pizza' : 'ios-pizza'}
                      size={20}
                      style={{ marginVertical: 5 }}
                      color={isSmallSizeSelected == true ? 'white' : '#777'}
                    ></Ionicons>
                    <Text
                      style={[
                        styles.buttonsText,
                        isSmallSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      {props.price} грн.
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View>
            {isMediumSizeSelected == true ? (
              <ActivatedTopBadge />
            ) : (
              <View></View>
            )}
            <View
              style={{
                overflow: 'hidden',
                borderRadius: 7,
              }}
            >
              <TouchableNativeFeedback
                onPress={() => mediumSizeHandler(isMediumSizeSelected)}
              >
                <View
                  style={[
                    styles.buttonsBox,
                    isMediumSizeSelected == true ? styles.activeButtonBox : '',
                  ]}
                >
                  <View style={styles.buttonsTextContainer}>
                    <Text
                      style={[
                        styles.buttonsText,
                        isMediumSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      35см (1000г.)
                    </Text>
                    <Ionicons
                      name={Platform.OS == 'android' ? 'md-pizza' : 'ios-pizza'}
                      size={20}
                      style={{ marginVertical: 5 }}
                      color={isMediumSizeSelected == true ? 'white' : '#777'}
                    ></Ionicons>
                    <Text
                      style={[
                        styles.buttonsText,
                        isMediumSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      {props.price} грн.
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View>
            {isLargeSizeSelected == true ? (
              <ActivatedTopBadge />
            ) : (
              <View></View>
            )}
            <View
              style={{
                overflow: 'hidden',
                borderRadius: 7,
              }}
            >
              <TouchableNativeFeedback
                onPress={() => largeSizeHandler(isLargeSizeSelected)}
              >
                <View
                  style={[
                    styles.buttonsBox,
                    isLargeSizeSelected == true ? styles.activeButtonBox : '',
                  ]}
                >
                  <View style={styles.buttonsTextContainer}>
                    <Text
                      style={[
                        styles.buttonsText,
                        isLargeSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      42см (1000г.)
                    </Text>
                    <Ionicons
                      name={Platform.OS == 'android' ? 'md-pizza' : 'ios-pizza'}
                      size={20}
                      style={{ marginVertical: 5 }}
                      color={isLargeSizeSelected == true ? 'white' : '#777'}
                    ></Ionicons>
                    <Text
                      style={[
                        styles.buttonsText,
                        isLargeSizeSelected == true ? { color: 'white' } : '',
                      ]}
                    >
                      {props.price} грн.
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    // marginBottom: 15,
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
    // fontWeight: 'bold',
    fontSize: 16,
  },

  buttonsContainer: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // around
  },
  buttonsBox: {
    // width: 95,
    // height: 55,
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'silver',
    borderColor: 'silver',
    borderWidth: 0.7,
  },
  buttonsTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonsText: {
    color: '#777',
    fontSize: 12, // 13
  },

  activeButtonBox: {
    backgroundColor: 'orange',
    borderColor: 'red',
    borderWidth: 0.7,
  },

  activeBadgeContainer: {
    zIndex: 10,
    width: 20,
    height: 20,
    bottom: 69,
    left: 40,
    // bottom: 65,
    // left: 83,
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

export default ProductItem;
