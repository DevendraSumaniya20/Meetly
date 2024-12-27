import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {moderateScale} from '../utils/responsive';
import Ripple from 'react-native-material-ripple';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const CustomButton = ({
  text,
  onPress,
  width,
  inlineStyle,
  textStyle,
  disabled,
  ...props
}) => {
  const theme = useSelector(state => state.theme.theme);

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <Ripple
      rippleColor={theme.ButtonBackgroundColor}
      onPress={handlePress}
      rippleOpacity={0.7}
      rippleDuration={1000}
      style={[
        styles.CustombuttonView,
        inlineStyle,
        {
          backgroundColor: disabled
            ? colors.WhiteOpacity[100]
            : colors.BlackOpacity[100],
          borderColor: disabled ? '#eee' : theme.BorderColor,
        },
      ]}
      disabled={disabled}>
      <Text
        style={[
          styles.textStyle,
          textStyle,
          {
            color: disabled ? theme.ButtonTextColor : theme.ButtonTextColor,
          },
        ]}>
        {text}
      </Text>
    </Ripple>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  CustombuttonView: {
    paddingVertical: moderateScale(16),
    borderRadius: moderateScale(16),
    alignItems: 'center',
    alignSelf: 'center',
    // marginVertical: moderateScale(16),
    borderWidth: 1,
    width: '100%',
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontFamily: fonts.ROBOTO.Medium,
    textAlign: 'center',
  },
});
