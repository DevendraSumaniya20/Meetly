import {useEffect, useState} from 'react';
import {useColorScheme, Appearance} from 'react-native';
import colors from './colors';

const CustomTheme = () => {
  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);

  const lightTheme = {
    primaryBackground: colors.primaryLightBackground, // Light Lavender Background
    secondaryBackground: colors.secondaryLightBackground, // Pale Lilac Background
    primaryAmethyst: colors.primaryLightAmethyst, // Light Amethyst
    primaryPeriwinkle: colors.primaryLightPeriwinkle, // Light Periwinkle
    textColor: colors.textPrimary,
    borderColor: colors.textPrimary,
    disabledBackground: colors.lightGray,
    disabledText: colors.gray,
    disabledBorder: colors.darkGray,
    placeholderTextColor: colors.textPrimary,
    LinearGradientColor: [
      colors.LightGradiantColor1,
      colors.LightGradiantColor2,
    ],
  };

  // Dark theme
  const darkTheme = {
    primaryBackground: colors.primaryDarkBackground, // Dark Purple Background
    secondaryBackground: colors.secondaryDarkBackground, // Deep Purple Background
    primaryAmethyst: colors.primaryDarkAmethyst, // Amethyst
    primaryPeriwinkle: colors.primaryDarkPeriwinkle, // Dark Periwinkle
    textColor: colors.white_100,
    borderColor: colors.white_100,
    disabledBackground: colors.black_40,
    disabledText: colors.white_70,
    disabledBorder: colors.black_60,
    placeholderTextColor: colors.white_100,
    LinearGradientColor: [colors.DarkGradiantColor1, colors.DarkGradiantColor2],
  };

  const theme = currentColorScheme === 'dark' ? darkTheme : lightTheme;

  const handleColorSchemeChange = newColorScheme => {
    setCurrentColorScheme(newColorScheme);
  };

  useEffect(() => {
    const initialColorScheme = Appearance.getColorScheme();
    handleColorSchemeChange(initialColorScheme);

    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      handleColorSchemeChange(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const adjustForDarkMode = currentTheme => {
    if (currentColorScheme === 'dark') {
      return {
        ...currentTheme,
        disabledBackground: colors.black_50,
        disabledText: colors.white_50,
        disabledBorder: colors.black_40,
      };
    }
    return currentTheme;
  };

  const adjustedTheme = adjustForDarkMode(theme);

  return adjustedTheme;
};

export default CustomTheme;
