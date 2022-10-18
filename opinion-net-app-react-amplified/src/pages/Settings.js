/* src/pages/Settings.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { Settings } from './ui-components';

function App() {
    return (
      <div>
        <Settings/>
      </div>
    );
  };

  export default Settings;