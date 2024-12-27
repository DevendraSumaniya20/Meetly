import {
  ImageBackground,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import CustomTextInput from '../../components/CustomTextInput';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import {moderateScale} from '../../utils/responsive';
import fonts from '../../utils/fonts';

const LoginScreen = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useSelector(state => state.theme.theme);

  return (
    <>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.MainBackgroundColor},
        ]}>
        <View style={styles.marginContainer}>
          <View style={styles.header}>
            <CustomText
              text="Login"
              fontFamily={fonts.ROBOTO.Bold}
              size={moderateScale(32)}
              color={theme.TextColor}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder="Email or Phone Number"
              value={email}
              onChangeText={text => setEmail(text)}
              rightIcon="alternate-email"
              rightIconType="MaterialIcons"
              onPressRight={() => {}}
            />

            <CustomTextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={secureTextEntry}
              rightIcon={
                secureTextEntry ? 'lock-closed-outline' : 'lock-open-outline'
              }
              rightIconType="Ionicons"
              onPressRight={() => setSecureTextEntry(prev => !prev)}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <CustomText
              text="Forgot Password?"
              color={theme.TextColor}
              size={moderateScale(16)}
              fontFamily={fonts.ROBOTO.Bold}
              marginTopDisable={true}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="Login"
              onPress={() => {
                navigation.replace('Tab', {screen: 'Home'});
              }}
            />
          </View>
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />

            <Text style={styles.orText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    // height: moderateScale(100),
    // width: moderateScale(400),
    height: moderateScale(120),
    width: '100%',
    tintColor: 'rgb(109, 40, 158)',
  },
  marginContainer: {marginHorizontal: moderateScale(12)},
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(150),
  },
  inputContainer: {
    marginVertical: moderateScale(16),
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginTop: moderateScale(16),
    paddingHorizontal: moderateScale(16),
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(14),
  },
  separatorLine: {
    height: 1,
    flex: 1,
    backgroundColor: 'gray',
    marginHorizontal: moderateScale(8),
  },
  orText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.ROBOTO.Medium,
    fontSize: moderateScale(16),
  },
});

export default LoginScreen;
