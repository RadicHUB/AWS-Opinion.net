/* src/pages/Home.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { Home } from './ui-components';

function App() {
    return (
      <div>
        <Home/>
      </div>
    );
  };
  

  export default Home;