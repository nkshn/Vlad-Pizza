import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// UI components
import ActivatedTopBadge from '../UI/ActivatedTopBadge';

const PickerButton = (props) => {
  return (
    <View>
      {props.variable == true ? <ActivatedTopBadge /> : null}
      <View style={{ overflow: 'hidden', borderRadius: 7 }}>
        <TouchableNativeFeedback onPress={() => props.function(props.variable)}>
          <View style={[styles.buttonsBox, props.variable == true ? styles.activeButtonBox : '']}>
            <View style={styles.buttonsTextContainer}>
              <Text style={[styles.buttonsText, props.variable == true ? { color: 'white' } : '']}>
                {props.size}
              </Text>
              <Ionicons
                size={20}
                style={{ marginVertical: 5 }}
                color={props.variable == true ? 'white' : '#777'}
                name={Platform.OS == 'android' ? 'md-pizza' : 'ios-pizza'}
              ></Ionicons>
              <Text style={[styles.buttonsText, props.variable == true ? { color: 'white' } : '']}>
                {props.price} грн
                </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsBox: {
    width: 90,
    borderRadius: 7,
    paddingTop: 10,
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
    fontSize: 14,
  },
  activeButtonBox: {
    backgroundColor: 'orange',
    borderColor: 'red',
    borderWidth: 0.7,
  },
});

export default PickerButton;
