import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

document.getElementById('urlInput').addEventListener('input', function() {
  const input = this.value;
  if (input.includes('@')) {
    // Assuming the input is an email, you can handle it accordingly
    console.log('Email entered:', input);
  } else {
   
    console.log('URL entered:', input);
  }
});

export default root;
