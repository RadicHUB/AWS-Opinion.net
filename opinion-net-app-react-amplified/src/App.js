/* src/App.js */
import { Amplify } from 'aws-amplify'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
const App = () => {
  console.log("Hello mfk")

  return (<div>
    <p>Hello World Test!</p>
  </div>);
}

export default App