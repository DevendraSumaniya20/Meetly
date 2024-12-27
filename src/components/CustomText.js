import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import {moderateScale} from '../utils/responsive';
import fonts from '../utils/fonts';
import {useSelector} from 'react-redux';

const CustomText = ({
  text,
  color,
  size = moderateScale(16),
  onPress,
  fontFamily = fonts.ROBOTO.Light,
  fontStyle,
  containerStyle,
  marginTop,
  marginTopDisable = false,
}) => {
  const hasNotch = DeviceInfo.hasNotch();
  const theme = useSelector(state => state.theme.theme);

  // Define the styles for the container and text
  const containerStyles = [
    styles.container,
    hasNotch && styles.notchContainer,
    containerStyle,
    marginTopDisable && {marginTop: moderateScale(0)},
  ];

  const textStyles = [
    styles.text,
    fontStyle,
    {color: color || theme.TextColor, fontSize: size, fontFamily},
  ];

  const Content = (
    <View style={containerStyles}>
      <Text style={textStyles}>{text}</Text>
    </View>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      {Content}
    </TouchableOpacity>
  ) : (
    Content
  );
};

export default CustomText;

const styles = StyleSheet.create({
  touchable: {
    // Optional margin or padding can be added here if necessary
  },
  container: {
    padding: moderateScale(10),
    alignItems: 'center',
  },
  notchContainer: {
    marginTop: moderateScale(34),
  },
  text: {
    fontFamily: fonts.ROBOTO.Light,
  },
});
