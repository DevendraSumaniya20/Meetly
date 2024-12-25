import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import CustomTextInput from '../../components/CustomTextInput';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import ImagePath from '../../utils/ImagePath';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
} from '../../utils/responsive';
import fonts from '../../utils/fonts';
import CustomTheme from '../../utils/CustomTheme';

const LoginScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useColorScheme();
  const LinearGradientTheme = CustomTheme();
  console.log(LinearGradientTheme);

  return (
    <>
      {/* <SafeAreaView style={{flex: 1}}> */}
      <LinearGradient
        colors={LinearGradientTheme.LinearGradientColor}
        style={styles.container}>
        <ImageBackground
          source={theme === 'dark' ? ImagePath.WAVEDARK : ImagePath.WAVELIGHT}
          style={{
            height: moderateScale(160),
          }}></ImageBackground>
        <View>
          <CustomText
            text={'Login'}
            fontFamily={fonts.ROBOTO.Bold}
            size={moderateScale(32)}
          />
        </View>
        <View style={{marginVertical: moderateScale(16), gap: 10}}>
          <CustomTextInput
            placeholder={'Email or Phone Number'}
            value={email}
            rightIcon={'alternate-email'}
            rightIconType={'MaterialIcons'}
            onChangeText={text => setEmail(text)}
          />

          <CustomTextInput
            placeholder={'Password'}
            onChangeText={text => setPassword(text)}
            secureTextEntry={secureTextEntry}
            value={password}
            rightIcon={
              secureTextEntry ? 'lock-closed-outline' : 'lock-open-outline'
            }
            rightIconType={'Ionicons'}
            onPressRight={() => setSecureTextEntry(prev => !prev)}
          />
        </View>
        <View>
          <CustomText text={'Forgot Password'} />
        </View>
        <View>
          <CustomButton />
        </View>
        <View>
          <View>
            <Text>-----------</Text>
          </View>
          <Text>OR</Text>
          <View>
            <Text>-----------</Text>
          </View>
        </View>
      </LinearGradient>
      {/* </SafeAreaView> */}
    </>
  );
};

export default LoginScreen;
