/* src/App.js */
import { Amplify } from 'aws-amplify'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
return <div className="App">
  <Login/>
</div>

}
export default App