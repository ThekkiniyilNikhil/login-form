import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h2 className='loginTitle'>SIGN IN</h2>
        <LoginForm/>
      </>
    );
  }
}

export default App;
