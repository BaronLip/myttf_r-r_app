import React from 'react'; 
import './App.css';
// Components:
import LoginForm from "./containers/loginForm";
import { Header, Segment } from 'semantic-ui-react'


function App() {
   return (
      <div className="ui container">
         <Header as='h1' block textAlign='center' color='blue'>
            Welcome to MyTTF
         </Header>
         <Segment attached>
            <LoginForm/>
         </Segment>
      </div>
   );
}

export default App;
