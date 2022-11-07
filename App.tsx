import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Initializer from './src/Initializer';

const App = () => {
  return (
    <Provider store={store}>
      <Initializer />
    </Provider>
  );
};

export default App;
