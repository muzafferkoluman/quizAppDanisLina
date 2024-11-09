import React from 'react';
import './App.css';

// Amplify ve Authenticator ile ilgili tüm importları kaldırdık.
// import { Amplify } from 'aws-amplify';
// import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';

import Quiz from './Quiz';

// Amplify konfigurasyonunu da kaldırıyoruz
// Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        {/* Quiz Component */}
        <Quiz /> 
      </header>
    </div>
  );
}

export default App;
