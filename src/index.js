import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {theme} from './config';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import store, {getQueries} from './store';
import App from './components/app';
import {ThemeProvider} from '@material-ui/core';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReduxQueryProvider queriesSelector={getQueries}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </ReduxQueryProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);