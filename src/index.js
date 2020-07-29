import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from "react-native-flash-message";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import '~/config/ReactotronConfig';
import store from './store';
import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <FlashMessage position="top" />
  </Provider>
);

export default App;
