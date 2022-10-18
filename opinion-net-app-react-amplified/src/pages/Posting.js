/* src/pages/Posting.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { Posting } from './ui-components';

function App() {
    return (
      <div>
        <Posting/>
      </div>
    );
  };

  export default Posting;