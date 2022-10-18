/* src/pages/ViewPost.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { ViewPost } from './ui-components';

function App() {
    return (
      <div>
        <ViewPost/>
      </div>
    );
  };

  export default ViewPost;