/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { 
  Login 
} from './ui-components';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
return <div className="App">
  <Login/>
</div>

}
export default App