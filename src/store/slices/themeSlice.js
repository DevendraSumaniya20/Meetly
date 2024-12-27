import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import colors from '../../utils/colors';

// Function to get the initial color scheme (light or dark)
const getInitialColorScheme = () => Appearance.getColorScheme() || 'light';

// Light theme definitions
const lightTheme = {
  MainBackgroundColor: colors.LightMainBackgroundColor,
  TextColor: colors.LightTextColor,
  BorderColor: colors.LightBorderColor,
  FontColor: colors.LightFontColor,
  PlaceHolderColor: colors.LightPlaceHolderColor,
  LinearGradientColor: [
    colors.LightLinearGradiantColor1,
    colors.LightLinearGradiantColor2,
  ],
  ButtonBackgroundColor: colors.LightButtonBackgroundColor, // Added for buttons
  ButtonTextColor: colors.LightButtonTextColor,
  ErrorColor: colors.ErrorColor, // Shared between themes
  WarningColor: colors.WarningColor,
  SuccessColor: colors.SuccessColor,
};

// Dark theme definitions
const darkTheme = {
  MainBackgroundColor: colors.DarkMainBackgroundColor,
  TextColor: colors.DarkTextColor,
  BorderColor: colors.DarkBorderColor,
  FontColor: colors.DarkFontColor,
  PlaceHolderColor: colors.DarkPlaceHolderColor,
  LinearGradientColor: [
    colors.DarkLinearGradiantColor1,
    colors.DarkLinearGradiantColor2,
  ],
  ButtonBackgroundColor: colors.DarkButtonBackgroundColor, // Added for buttons
  ButtonTextColor: colors.DarkButtonTextColor,
  ErrorColor: colors.ErrorColor, // Shared between themes
  WarningColor: colors.WarningColor,
  SuccessColor: colors.SuccessColor,
};

// Initial state setup
const initialState = {
  colorScheme: getInitialColorScheme(),
  theme: getInitialColorScheme() === 'dark' ? darkTheme : lightTheme,
};

// Redux slice for theme management
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to set color scheme manually
    setColorScheme: (state, action) => {
      state.colorScheme = action.payload;
      state.theme = action.payload === 'dark' ? darkTheme : lightTheme;
    },
    // Action to update the theme dynamically (optional, for advanced use cases)
    updateTheme: (state, action) => {
      state.theme = {...state.theme, ...action.payload};
    },
  },
});

// Export actions and reducer
export const {setColorScheme, updateTheme} = themeSlice.actions;
export default themeSlice.reducer;
