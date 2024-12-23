// Import required modules
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Retrieve default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: {sourceExts, assetExts},
} = defaultConfig;

// Define custom Metro configuration
const customConfig = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

// Merge the default config with the custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the configuration with Reanimated's Metro config wrapper
const finalConfig = wrapWithReanimatedMetroConfig(mergedConfig);

// Export the final configuration
module.exports = finalConfig;
