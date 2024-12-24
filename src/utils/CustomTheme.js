import {useEffect, useState} from 'react';
import {useColorScheme, Appearance} from 'react-native';

const CustomTheme = () => {
  const colorScheme = useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme);

  // Light theme colors
  const lightTheme = {
    primaryBackground: '#F5EFFF',
    secondaryBackground: '#E5D9F2',
    primaryAmethyst: '#CDC1FF',
    primaryPeriwinkle: '#A294F9',
    textColor: '#000',
    borderColor: '#000',
    disabledBackground: '#d3d3d3',
    disabledText: '#808080',
    disabledBorder: '#c0c0c0',
  };

  // Dark theme colors
  const darkTheme = {
    primaryBackground: '#1C1B2F',
    secondaryBackground: '#2C2B3F',
    primaryAmethyst: '#6B5F99',
    primaryPeriwinkle: '#4A407D',
    textColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    disabledBackground: '#4a4a4a',
    disabledText: '#a0a0a0',
    disabledBorder: '#2c2c2c',
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

        disabledBackground: '#555555',
        disabledText: '#b0b0b0',
        disabledBorder: '#333333',
      };
    }
    return currentTheme;
  };

  const adjustedTheme = adjustForDarkMode(theme);

  return adjustedTheme;
};

export default CustomTheme;
