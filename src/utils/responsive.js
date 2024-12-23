import {Dimensions, PixelRatio, StatusBar} from 'react-native';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

// Get screen dimensions
const {width, height} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// Scaling functions for different screen sizes
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

// Moderate scaling with a customizable factor to adjust based on screen size
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Calculating dimensions based on percentage
const moderateWidth = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const moderateHeight = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

// Dynamic Status Bar height with consideration for device-specific features like notch/dynamic island
export const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;
export const MARGIN_TOP_STATUSBAR = () => {
  if (hasNotch() || hasDynamicIsland()) {
    return moderateScale(50); // Adjust the top margin for devices with a notch or dynamic island
  }
  return STATUSBAR_HEIGHT + moderateWidth(5); // Regular margin for devices without notch
};

// Exporting scaling functions and margin calculation
export {scale, verticalScale, moderateScale, moderateWidth, moderateHeight};
