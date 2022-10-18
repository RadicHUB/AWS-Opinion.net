/* src/pages/Login.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { Login } from './ui-components';

function App() {
    return (
      <div>
        <Login/>
      </div>
    );
  };

  export default Login;