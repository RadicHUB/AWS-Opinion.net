/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { 
  Cover,
  Home,
  Login,
  Increment,
  Posting,
  Settings,
  ViewPost 
} from './ui-components';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Settings />
    </div>
  );
}

export default App