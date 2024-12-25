import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from '../utils/responsive';
import CustomIcon from './CustomIcon';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import CustomTheme from '../utils/CustomTheme';

const CustomTextInput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  rightIcon,
  onPressRight,
  rightIconType = 'Ionicons',
  value,
  textAlign = 'left',
  borderColor,
  placeholderTextColor,
  ...props
}) => {
  const theme = CustomTheme();
  const resolvedPlaceholderTextColor =
    placeholderTextColor || theme.placeholderTextColor;
  const resolvedBorderColor = borderColor || theme.borderColor;
  const textColor = theme.textColor;

  return (
    <View style={[styles.container]}>
      <View style={[styles.inputWrapper, {borderColor: resolvedBorderColor}]}>
        {rightIcon && (
          <TouchableOpacity onPress={onPressRight} style={styles.iconWrapper}>
            <CustomIcon
              name={rightIcon}
              color={resolvedPlaceholderTextColor}
              size={28}
              type={rightIconType}
            />
          </TouchableOpacity>
        )}

        <TextInput
          style={[
            styles.textInput,
            {color: textColor, fontFamily: fonts.ROBOTO.Medium},
          ]}
          placeholder={placeholder}
          placeholderTextColor={resolvedPlaceholderTextColor}
          textAlign={textAlign}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          value={value}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(12),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    borderWidth: 1,
    marginHorizontal: moderateScale(16),
  },
  iconWrapper: {
    marginRight: moderateScale(16),
  },
  textInput: {
    fontFamily: fonts.ROBOTO.Medium,
    fontSize: moderateScale(14),
    flex: 1,
    paddingVertical: moderateScale(14),
  },
});
