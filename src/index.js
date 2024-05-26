import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowerRouter} from "react-router-dom"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>
  </React.StrictMode>
);

