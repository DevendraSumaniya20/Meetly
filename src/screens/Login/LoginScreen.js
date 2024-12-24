import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={[
        colors.primaryBackground,
        colors.primaryPeriwinkle,
        colors.primaryAmethyst,
      ]}
      style={styles.container}>
      <Text>LoginScreen</Text>
    </LinearGradient>
  );
};

export default LoginScreen;
