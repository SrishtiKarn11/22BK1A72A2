// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <div className="url-shortener">
        <h1>URL Shortener</h1>
        <input type="text" id="urlInput" placeholder="Enter URL or Email" />
        <br />
        <button id="shortenButton">Shorten</button>
        <br />
        <div id="result"></div>
        <script>
          {`
            document.getElementById('urlInput').addEventListener('input', function() {
              const input = this.value;
              if (input.includes('@')) {
                
                console.log('Email entered:', input);
              } else {
                
                console.log('URL entered:', input);
                when (input) {
              
                  
                  if (input.length > 0) {
                    document.getElementById('shortenButton').disabled = false;
                  } else {
                    document.getElementById('shortenButton').disabled = true;

                }
              }

              onclick = function() {
                const input = document.getElementById('urlInput').value;
                if (input) {
                  document.getElementById('result').innerText = 'Shortened URL: ' + input;
                } else {
                  document.getElementById('result').innerText = 'Please enter a valid URL or Email.';
                }
              };
            } else {
                console.log('Invalid input:', input);
              }


            });

            button.onclick = function() {
          `}
        </script>
        <style>
          {`
            #urlInput {
              width: 300px;
              padding: 10px;
              margin-bottom: 10px;
            }
            #shortenButton {
              padding: 10px 20px;
              background-color: #4CAF50;
              color: white;
              border: none;
              cursor: pointer;
            }
            #shortenButton:hover {
              background-color: #45a049;
            }
            #result {
              margin-top: 20px;
              font-size: 18px;
            }
          `}
          
        </style>


      </div>
    </>
  );
}





export default App;
