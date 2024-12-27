import {Dimensions, ImageBackground, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../components/CustomText';
import ImagePath from '../../utils/ImagePath';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
} from '../../utils/responsive';
import fonts from '../../utils/fonts';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('MainStack');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        blurRadius={10}
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
          }}>
          <CustomText
            text={'Meetly'}
            size={moderateScale(26)}
            fontFamily={fonts.ROBOTO.Bold}
            color={theme.TextColor}
          />
          <Text style={{color: '#0055de', fontSize: moderateScale(18)}}>
            Welcome to Meetly, a social media platform where you can connect
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
