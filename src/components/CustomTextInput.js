import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from '../utils/responsive';
import CustomIcon from './CustomIcon';
import fonts from '../utils/fonts';
import {useSelector} from 'react-redux';

const CustomTextInput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  rightIcon,
  onPressRight,
  rightIconType = 'Ionicons',
  value,
  textAlign = 'left',
  ...props
}) => {
  // Get the theme from the Redux store
  const theme = useSelector(state => state.theme.theme);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: theme.BorderColor,
          },
        ]}>
        {/* Right icon */}
        {rightIcon && (
          <TouchableOpacity onPress={onPressRight} style={styles.iconWrapper}>
            <CustomIcon
              name={rightIcon}
              color={theme.PlaceHolderColor}
              size={28}
              type={rightIconType}
            />
          </TouchableOpacity>
        )}

        {/* TextInput */}
        <TextInput
          style={[
            styles.textInput,
            {
              color: theme.FontColor, // Use font color from theme
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme.PlaceHolderColor} // Set the placeholder color from theme
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
    padding: moderateScale(0),
  },
});
