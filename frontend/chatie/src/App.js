import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './chat.css';

function App(){
return (
  <div className="App">
    <header className="App-header">
      <div className="chatbot-container">
        <Chatbot className="chaat"
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          headerText="Chat with Chatie" 
        />
      </div>
    </header>
  </div>
);
}
export default App;