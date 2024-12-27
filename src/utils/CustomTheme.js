import {useEffect, useState} from 'react';
import {useColorScheme, Appearance} from 'react-native';
import colors from './colors';

const CustomTheme = () => {
  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);

  const lightTheme = {
    primaryBackground: colors.lightPrimaryBackground, // Clean white background
    secondaryBackground: colors.lightSecondaryBackground, // Subtle gray for contrast
    accentColor: colors.lightAccentColor, // Soft Blue for highlights
    textColor: colors.lightTextPrimary, // Black for sharp text
    borderColor: colors.lightTextPrimary, // Matches primary text for borders
    disabledBackground: colors.lightGray, // Light gray for disabled elements
    disabledText: colors.gray, // Neutral gray for disabled text
    disabledBorder: colors.darkGray, // Dark gray for disabled borders
    placeholderTextColor: colors.lightTextSecondary, // Secondary text color for placeholders
    LinearGradientColor: [
      colors.lightSecondaryBackground, // Subtle gradient start
      colors.lightPrimaryBackground, // Subtle gradient end
    ],
  };

  const darkTheme = {
    primaryBackground: colors.darkPrimaryBackground, // Near black background
    secondaryBackground: colors.darkSecondaryBackground, // Slightly lighter for contrast
    accentColor: colors.darkAccentColor, // Soft purple for highlights
    textColor: colors.darkTextPrimary, // White for sharp text
    borderColor: colors.darkTextPrimary, // Matches primary text for borders
    disabledBackground: colors.black_40, // Dimmed black for disabled elements
    disabledText: colors.black_70, // Dimmed white for disabled text
    disabledBorder: colors.black_60, // Subtle black for disabled borders
    placeholderTextColor: colors.darkTextSecondary, // Light gray for placeholders
    LinearGradientColor: [
      colors.darkSecondaryBackground, // Subtle gradient start
      colors.darkPrimaryBackground, // Subtle gradient end
    ],
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
