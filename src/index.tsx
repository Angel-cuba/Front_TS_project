import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './redux/reducers';
import * as serviceWorker from './serviceWorker';

import './Styles/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const WithProvider = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<WithProvider />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
