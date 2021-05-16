import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';

const ButtonContainer = props => {
  return (
    <TouchableOpacity
      style={[style.buttonContainer, props.buttonStyle]}
      onPress={props.onClick}>
      <Text style={[style.buttonText, props.buttonTextStyle]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;

const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width - 60,
    paddingVertical: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
