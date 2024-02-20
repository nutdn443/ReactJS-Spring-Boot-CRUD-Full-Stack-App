import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}> {/* Wrap App in Provider and pass the store */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// Service worker registration
serviceWorker.unregister();
