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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.getElementById('urlInput').addEventListener('input', function() {
  const input = this.value;
  if (input.includes('@')) {
    // Assuming the input is an email, you can handle it accordingly
    console.log('Email entered:', input);
  } else {
    // Handle other types of input, e.g., URLs
    console.log('URL entered:', input);
  }
});

export default root;
