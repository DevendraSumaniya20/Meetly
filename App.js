import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Appearance} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store/store';
import {setColorScheme} from './src/store/slices/themeSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch(setColorScheme(colorScheme));
    });

    dispatch(setColorScheme(Appearance.getColorScheme()));

    return () => {
      subscription.remove();
    };
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
