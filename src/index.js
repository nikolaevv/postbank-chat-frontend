import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import store, {getQueries} from './store';
import App from './components/app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReduxQueryProvider queriesSelector={getQueries}>
                <App />
            </ReduxQueryProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);