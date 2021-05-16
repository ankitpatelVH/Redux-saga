import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    alignSelf: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 50,
  },
  inputBox: {
    width: width - 60,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonStyle: {
    marginVertical: 30,
    backgroundColor: Colors.LIGHT_PERPUL,
    borderRadius: 30,
  },
});
