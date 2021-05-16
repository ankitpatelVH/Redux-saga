import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Route from './src/Navigation/Route';
import {store} from './src/Services/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
