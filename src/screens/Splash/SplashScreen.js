import {Dimensions, ImageBackground, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';

import colors from '../../utils/colors';
import CustomText from '../../components/CustomText';
import ImagePath from '../../utils/ImagePath';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
} from '../../utils/responsive';
import fonts from '../../utils/fonts';
import DeviceInfo from 'react-native-device-info';

const SplashScreen = ({navigation}) => {
  const hasNotch = DeviceInfo.hasNotch();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainStack');
    }, 1000);
  });

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        blurRadius={4}
        source={ImagePath.MEETLY}
        style={{
          height: moderateHeight(100),
          width: moderateWidth(100),
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: moderateScale(16),
            flex: 1,
            marginBottom: windowHeight * 0.4,
            // marginTop: hasNotch ? moderateScale(194) : moderateScale(160),
          }}>
          <CustomText
            text={'Meetly'}
            color={colors.lavenderBlush}
            size={moderateScale(26)}
            fontFamily={fonts.ROBOTO.Bold}
          />
          <Text style={{color: colors.white_80, fontSize: moderateScale(18)}}>
            Welcome to Meetly, a social media platform where you can connect
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
