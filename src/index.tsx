import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.css';
import './index.css';
import App from './app/layout/App';
import 'react-datepicker/dist/react-datepicker.css';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './app/stores/store';



ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value = {store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
