import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import {moderateHeight, moderateScale} from '../utils/responsive';
import CustomTheme from '../utils/CustomTheme';
import fonts from '../utils/fonts';

const CustomText = ({
  text,
  color,
  size = moderateScale(16),
  onPress,
  fontFamily,
  FontStyle,
  FontViewStyle,
}) => {
  const hasNotch = DeviceInfo.hasNotch();
  const theme = CustomTheme();

  const textColor = color || theme.textColor;

  const Content = (
    <View
      style={[
        styles.container,
        hasNotch && styles.notchContainer,
        FontViewStyle,
      ]}>
      <Text
        style={[
          styles.text,
          FontStyle,
          {color: textColor, fontSize: size, fontFamily: fontFamily},
        ]}>
        {text}
      </Text>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        {Content}
      </TouchableOpacity>
    );
  }

  return Content;
};

export default CustomText;

const styles = StyleSheet.create({
  touchable: {
    marginVertical: moderateScale(10),
  },
  container: {
    padding: moderateScale(10),
    alignItems: 'center',
  },
  notchContainer: {
    // marginTop: moderateScale(34),
  },
  text: {
    fontFamily: fonts.ROBOTO.Light,
  },
});
